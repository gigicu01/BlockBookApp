import React from 'react';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


function Post(){ //got this navbar stuff also from The Net Ninja
    return ( 
        <form>
          <div>
            <TextField
              name="username"
              label="Username"
              type="text"
              autoComplete="Username"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              name="postContent"
              label="Post Content"
              type="text"
              autoComplete="Post Content"
              variant="outlined"
            />
          </div>
    
          <Button type="submit">
              Post
            </Button>
        </form>
        
            
        
    )
}

export default Post;
