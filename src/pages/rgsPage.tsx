import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { supabaseClient } from "../api/supabaseClient"
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

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
  };

  return (
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
          autoComplete="new-password"
          variant="outlined"
        />
      </div>

      <Button type="submit">
          Sign up
        </Button>
    </form>
  );
};