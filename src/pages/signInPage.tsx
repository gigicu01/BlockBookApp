import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { supabaseClient } from "../api/supabaseClient";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"

// from https://emailregex.com/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const SignInPage = () => {
  const classes = useStyles();
  const { formState: { errors } } = useForm();
  const history = useNavigate()

  return (
    <form className={classes.form}   onSubmit={async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; 
        const password = target.password.value; 
        
        const { error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
          })

        if(error){
        // probably should tell the user about the error, but will implement later
        console.error(error)
        return
        }
    
        // then redirect to the root page.
        history('/signin')       
      }}>
      <div>
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="password"
          variant="outlined"
        />
      </div>

      <Button type="submit">
        Sign In
      </Button>

      <Link to="/signup">
        <Button>
          Sign Up
        </Button>
      </Link>
    </form>
  );
};

export default SignInPage