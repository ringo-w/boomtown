import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import PropTypes from "prop-types";

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{ id: this.props.match.params.userid || viewer.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error! ${error.message}`;
              return <Profile profile={data.user} viewer={viewer} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default ProfileContainer;
