/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Theme from "./theme";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import AddExpense from "./components/pages/add-expense";
import EditExpense from "./components/pages/edit-expense";

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="/create" component={AddExpense} />
          <Route path="/edit" component={EditExpense} />
        </Switch>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
