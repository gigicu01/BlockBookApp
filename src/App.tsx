import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from './pages/signupPage';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Feed from './pages/feed';
import Post from './pages/Post';
import Profile from './pages/Profile';
import { Container } from '@material-ui/core'
import SignInPage from './pages/signInPage';
import { SignOutPage } from './pages/signOutPage';
import { supabaseClient } from "./api/supabaseClient"

function App() {
  return (
    <div className='appContainer'>
    <Router>

      <Navbar/>
      <main>
        <Routes>
          <Route path="/signup" element = { <SignUpPage /> } />
          <Route path="/signin" />
          <Route path="/signout" />
          <Route path="/" element = {<Feed/>}/>
          <Route path="/post" element = {<Post/>}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
      </main>
      <Footer/>

    </Router>
    </div>
  );
}

// const stuff = async () => {
//   const { data } = await supabaseClient.auth.getSession()
//   return <div>
//     {data.session && `you are logged in as ${data.session.user.email}`}
//   </div>
// }

//const Hoempage = () => {
  //const whatever = supabaseClient.auth.getSession().then(res => {
     // this.setState({
       // session: res.data.session?.user.email
     // })
     // const data = res.data
     // return res.data
   // })
    
   //return <div>
   //  {whatever.then && `you are logged in as ${data.session.user.email}`}
  // </div>    
    
//}

export default App;
