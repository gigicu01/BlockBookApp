import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { //got this navbar stuff also from The Net Ninja
    return (
        <div>
        
        <div className='navbar'>
            <div className='navImg'>
                <img src="bb_logo.png" alt="BlockBook Logo" height="60" />
                <span>BlockBook</span>
            </div>

            <nav className='links'>
                <Link to="/">Feed</Link>
                <Link to="/signup">Log in</Link>
                <Link to="/Post">Post</Link>
                <Link to="/Profile">Profile</Link>
            </nav>
        </div>
        </div>
    )
}

export default Navbar;
