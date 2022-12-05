import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from './pages/signupPage';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Feed from './pages/feed';
import Post from './pages/Post';
import { Container } from '@material-ui/core'

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
        </Routes>
      </main>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
