import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemsGrids from "../../components/ItemGrids";

const Items = ({ items }) => {
  console.log({ items });
  return (
    <div>
      <ItemsGrids items={items} />
    </div>
  );
};

export default withStyles(styles)(Items);
