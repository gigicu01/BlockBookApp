import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { supabaseClient } from "../api/supabaseClient";
import { Link as RouterLink, redirect } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

// from https://emailregex.com/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const useStyles = makeStyles((theme) => ({
  form: {
    width: 300,
    margin: "2em 0 0 0",
    "& > div": {
      margin: "0.6em 0 0.75em 0"
    }
  },
  otherActionsContainer: {
    textAlign: "right",
  },
  paper: {
    marginTop: "4em",
    padding: "6em 0 10em 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));


const SignInPage = () => {
  const classes = useStyles();
  const { formState: { errors } } = useForm();

    // look for `redirectUri` query, so we can redirect users back to the page they were on
    const redirectUri = new URLSearchParams(window.location.search).get(
      "redirectUri"
    );

  return (
    <Paper variant="outlined" className={classes.paper}>
    <Typography variant="h5" align="center">
      Sign in to BlockBook!
    </Typography>
    <form className={classes.form}   onSubmit={async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; 
        const password = target.password.value; 
        console.log("here")
        const { error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
          })
        
        if(error){
        // probably should tell the user about the error, but will implement later
        console.error(error)
        alert(error)
        return
        }
    
        // then redirect to the root page.
        console.log("here")
        window.location.href = (redirectUri || "/"); 
      }}>
      <div>
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="password"
          variant="outlined"
          fullWidth
        />
      </div>

      <Button
       type="submit"
       variant="contained"
       color="primary"
       size="large"
       disableElevation
       fullWidth
       >
        Sign In
      </Button>

      <RouterLink to="/signup">
        <Button>
          Sign Up
        </Button>
      </RouterLink>
    </form>
  </Paper>
  );
};

export default SignInPage