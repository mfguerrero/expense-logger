/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Theme from "./theme";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import AddExpense from "./components/pages/add-expense";
import EditExpense from "./components/pages/edit-expense";
import { setToken } from "./redux/auth/reducer";

import store, { history } from "./redux/store";

Window.nav = history;

const App = () => {
  const token = window.localStorage.getItem("el-token");
  if (token) store.dispatch(setToken(token));
  return (
    <Provider store={store}>
      <Theme>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
          </Switch>
        </ConnectedRouter>
        <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} transition={Slide} theme="colored" />
      </Theme>
    </Provider>
  );
};

export default App;
