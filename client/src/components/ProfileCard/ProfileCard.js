import React, { Component } from "react";
import Gravatar from "react-gravatar";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import ItemCard from "../ItemCard";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

class ProfileCard extends Component {
  render() {
    const { profile, viewer } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography>{profile.fullname}</Typography>
          <Typography>{profile.bio}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
