import { Route, Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { ViewerContext } from "../../context/ViewerProvider";

const PrivateRoute = (
  { component: Component, location, ...rest } // ...rest is everything else in props
) => (
  <ViewerContext.Consumer>
    {({ viewer }) => (
      <Route
        render={props => {
          if (viewer) return <Component {...props} />;
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          );
        }}
        {...rest}
      />
    )}
  </ViewerContext.Consumer>
);

PrivateRoute.propTypes = {
  Component: PropTypes.object,
  location: PropTypes.object,
  rest: PropTypes.object
};
export default PrivateRoute;
