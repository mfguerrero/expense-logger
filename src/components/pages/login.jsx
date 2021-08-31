import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./login.style";

export const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const loginHandler = () => {
    history.push("/dashboard");
  };

  return (
    <div className={classes.layout}>
      <div className={classes.box}>
        <h1 className={classes.title}>Expense Logger</h1>
        <p className={classes.subTitle}>It's time to get your expenses under control.</p>
        <TextField placeholder="email" type="email" className={classes.textField} variant="outlined" />
        <TextField type="password" placeholder="Password" className={classes.textField} variant="outlined" />
        <Button variant="contained" color="primary" disableElevation onClick={loginHandler}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
