import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { supabaseClient } from "../api/supabaseClient"
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  form: {
    width: 300,
    margin: "2em 0 0 0",
    "& > div": {
      margin: "0.6em 0 0.6em 0"
    },
  },
  paper: {
    margin: "4em 0 0 0",
    padding: "6em 0 10em 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// look for `redirectUri` query, so we can redirect users back to the page they were on
const redirectUri = new URLSearchParams(window.location.search).get(
  "redirectUri"
);

export const SignUpPage = () => {
  const classes = useStyles();
  const onSubmit = ({ email, password }: any) => {
    supabaseClient.auth.signUp({
      email,
      password,
    }).then(res => {
      console.log(res.data.user)
      console.log(email)
      console.log(password)
      alert("signed up successfully! check your email!")
    }).catch(err => {
      console.error(err)
    });

    return window.location.href = "/profile/create" 
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
    <Typography variant="h5" align="center">
      Sign up for BlockBook!
    </Typography>
    <form className={classes.form}   onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        
        supabaseClient.auth.signUp({
            email: email,
            password: password,
          }).then(res => {
            console.log(res.data.user)
            console.log(email)
            console.log(password)
            alert("signed up successfully! check your email!")
          }).catch(err => {
            console.error(err)
          });

        return window.location.href = "/profile/create" 
      }}>
      <div>
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          variant="standard"
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          variant="standard"
          fullWidth
        />
      </div>
      <Button
       type="submit" variant="text"
       variant="contained"
       color="primary"
       disableElevation
       fullWidth
       size="large"
       >
          Sign up
        </Button>
    </form>
  </Paper>
  );
};