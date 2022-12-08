import { AuthSession } from "@supabase/supabase-js";
import React, { useContext, useEffect, useState, PropsWithChildren } from "react";
import { supabaseClient } from "../api/supabaseClient";

interface Props {
    children: React.ReactNode;
  }

export type AuthContext = {
    sessionData: any
    setSessionData: any
}

const AuthContext = React.createContext<AuthContext>({ sessionData: null, setSessionData : () => {}});

export const AuthProvider:React.FC<Props> = ({ children }) => {

    const [sessionData, setSessionData] = React.useState<any>(null);

    const getSessionData = async () =>{
      try{
    const response : any = await supabaseClient.auth.getSession();
    
    setSessionData(response.data);
    
         }catch(err){
    }
    }
    
    useEffect(()=>{getSessionData();},[]);

    // const [session, setSession] = useState<AuthSession | null>(sessionData?.session)
    useEffect(()=> {
        const cleanup = supabaseClient.auth.onAuthStateChange((_ev, session)=> {
            console.log("auth session changed", session)
            setSessionData(session)
        })

        return () => {
            console.log("clearing up auth subscription")
            cleanup.data?.subscription.unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={{sessionData, setSessionData}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}