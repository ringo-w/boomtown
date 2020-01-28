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
        <Route exact path="/items" component={Items} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/share" component={Share} />
        <Redirect from="*" to="/Home" />
      </Switch>
    </Router>
  </Fragment>
);
