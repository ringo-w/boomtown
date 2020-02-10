import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import PropTypes from "prop-types";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, data }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ data, error, loading }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              return <Items items={data.items} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

ItemsContainer.propTypes = {
  viewer: PropTypes.object
};

export default ItemsContainer;
