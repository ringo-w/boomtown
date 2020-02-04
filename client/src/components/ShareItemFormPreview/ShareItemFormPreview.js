import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div>
          <ItemCard item={state} />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
