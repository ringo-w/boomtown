import { Query } from "react-apollo";
import React from "react";
import { VIEWER_QUERY } from "../apollo/queries";
import PropTypes from "prop-types";

const ViewerContext = React.createContext();

const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        const viewer = data && data.viewer ? data.viewer : null;
        return (
          <ViewerContext.Provider value={{ viewer, loading }}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};

ViewerProvider.propTypes = {
  children: PropTypes.object.isRequired
};

export { ViewerContext };
export default ViewerProvider;
