import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div style={{ padding: "120px 10px 10px 10px" }}>
          <ItemCard item={state} />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
