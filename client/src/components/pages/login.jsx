/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./login.style";

import { login } from "../../redux/auth/reducer";

export const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const token = useSelector((state) => state.auth.token);

  if (token) setTimeout(() => Window.nav.push("/dashboard"), 0);

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    dispatch(login(credentials));
  };

  return (
    <div className={classes.layout}>
      <div className={classes.box}>
        <h1 className={classes.title}>Expense Logger</h1>
        <p className={classes.subTitle}>It's time to get your expenses under control.</p>
        <TextField
          name="email"
          placeholder="email"
          value={credentials.mail}
          type="email"
          className={classes.textField}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          className={classes.textField}
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" disableElevation onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
