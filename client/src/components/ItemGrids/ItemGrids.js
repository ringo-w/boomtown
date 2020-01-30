import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";

class ItemGrids extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    let { items } = this.props;

    return (
      <div>
        {items.map(item => {
          return <ItemCard item={item} />;
        })}
      </div>
    );
  }
}

export default ItemGrids;
