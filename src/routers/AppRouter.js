import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
