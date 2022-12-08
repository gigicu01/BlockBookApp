import React from 'react';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { supabaseClient } from "../api/supabaseClient";
//import imageToAdd from "./public/bb_logo.png";

function Post(){ //got this navbar stuff also from The Net Ninja
    return ( 
      <div className ="postbox">
        <div className="postWrapper">
          <form>
          <img src="bb_logo.png" alt="BlockBook Logo" height="60"/>
          <img src="profile_placeholder.png" alt="Profile Picture" height="60" className = "profilepic"/>
            <div>
                <input type="text" name="topic" className="topic" placeholder='Topic' />
            </div>
            <div>
                <input type="text" name="postContents" className="postContent" placeholder="What Do You Wanna Say?" />
            </div>
      
            <Button type="submit">
                Post
              </Button>
          </form>
        </div>
      </div>     
        
    )
}

export default Post;
