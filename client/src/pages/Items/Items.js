import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemsGrids from "../../components/ItemGrids";
import PropTypes from "prop-types";

const Items = ({ items }) => {
  console.log({ items });
  return (
    <div>
      <ItemsGrids items={items} />
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default withStyles(styles)(Items);
