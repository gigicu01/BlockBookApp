import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from './pages/signupPage';
import { Container } from '@material-ui/core';
import NavbarAJ from './pages/navbar';
import Footer from './pages/footer';
import Feed from './pages/feed';
import Post from './pages/Post';
import Profile from './pages/Profile';
import SignInPage from './pages/signInPage';
import { SignOutPage } from './pages/signOutPage';
import { supabaseClient } from "./api/supabaseClient";
import { NavBar } from "./component/navBar";
import { AuthProvider } from './contexts/authContext'


function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Container maxWidth="sm">
        <Routes>
          <Route path="/signup" element = { <SignUpPage /> } />
          <Route path="/signin" element = { <SignInPage /> } />
          <Route path="/signout" element = { <SignOutPage /> } />
          <Route path="/" element = {  <HomePage />} />
          <Route path="/" element = {<Feed/>}/>
          <Route path="/post" element = {<Post/>}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
        </Container>
        <Footer/>
      </Router>
    </AuthProvider>
  )

}

// const HomePage =  () => {
//   const [data, setData] = React.useState(null);
//   const { data } =  supabaseClient.auth.getSession()
//   return <div>
//     {data.session && `you are logged in as ${data.session.user.email}`}
//   </div>
// }
// const Homepage = () => {
//   const whatever = supabaseClient.auth.getSession().then(res => {
//       this.setState({
//         session: res.data.session?.user.email
//       })
//       const data = res.data
//       return res.data
//     })
    
//    return <div>
//      {whatever.then && `you are logged in as ${data.session.user.email}`}
//    </div>    
    
// }

const HomePage =  () => {
  const [data, setData] = React.useState<any>(null);

const getData = async () =>{
  try{
const response : any = await supabaseClient.auth.getSession();

setData(response.data);

     }catch(err){
}
}


useEffect(()=>{getData();},[]);

  return <div>
    {data?.session && `you are logged in as ${data?.session.user.email}`}
  </div>
}

export default App
