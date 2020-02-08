import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import NavBar from "../components/NavBar";
import { ViewerContext } from "../context/ViewerProvider";
import PrivateRoute from "../components/PrivateRoute";
import FullScreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/home" name="home" component={Home} />
            <Redirect from="*" to="/home" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/items" component={Items} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:userid" component={Profile} />
            <PrivateRoute exact path="/share" component={Share} />
            <Redirect from="*" to="/items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
