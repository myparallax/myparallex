import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
function MainWrap() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default MainWrap;
