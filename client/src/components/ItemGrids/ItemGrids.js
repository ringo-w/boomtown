import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

class ItemGrids extends Component {
  render() {
    let { items } = this.props;
    return (
      <Grid item xs="auto">
        <Grid container justify="center" spacing={3}>
          {items.map(item => (
            <Grid key={item.id} item>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(ItemGrids);
