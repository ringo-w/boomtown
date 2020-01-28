import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from "../pages/Home";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share";

export default () => (
  <Fragment>
    <Router>
      {/* @TODO: Add your menu component here */}
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Items" component={Items} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Profile/:id" component={Profile} />
        <Route exact path="/Share" component={Share} />
        <Redirect from="*" to="/Home" />
      </Switch>
    </Router>
  </Fragment>
);
