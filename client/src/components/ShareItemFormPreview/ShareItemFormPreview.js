import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div>
          <ItemCard
            item={state} // make sure image is not clickable by
            removing
            it
            on
            form
            preview
          />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
