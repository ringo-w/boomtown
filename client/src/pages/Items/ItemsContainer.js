import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 0 }}>
        {({ data, error, loading }) => {
          if (loading) return <FullScreenLoader />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items items={data.items} />;
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
