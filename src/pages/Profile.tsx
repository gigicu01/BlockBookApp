import React from 'react';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


function Profile(){ //got this navbar stuff also from The Net Ninja
    return ( 
        <div className='profileMain'>
            <div className='profCol'>
                <img src="profile_placeholder.png" alt="Default Avatar" height="100"/>
                <h3>User Name</h3>
                <div>
                    <p>User Age</p>
                    <p>Pronouns</p>
                    <p>Profession?</p>
                </div>
                
            </div>
            <div className='profCol'>
                <div>
                    <p>User Bio</p>
                </div>
                <div>
                    <p>Top Posts</p>
                    <div className='post'>
                        <span style={{ fontWeight: 'bold' }}>Username</span>
                        <p>Content of the post</p>
                        <div className='interactives'>
                            <button>Like</button>
                            <button>Repost</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Profile;
