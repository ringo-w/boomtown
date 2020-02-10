import React, { Component } from "react";
import Gravatar from "react-gravatar";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import ItemCard from "../ItemCard";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

class ProfileCard extends Component {
  render() {
    const { profile, viewer, classes } = this.props;
    return (
      <div className={classes.pad}>
        <Card className={classes.card}>
          <CardContent className={classes.alignContent}>
            <Gravatar email={profile.email} className={classes.gravatar} />
            <Typography>
              <h2>{profile.fullname}</h2>
            </Typography>
            <Typography className={classes.details}>
              {profile.items.length} Items Shared
            </Typography>
            <Typography>{profile.borrowed.length} Items Borrowed</Typography>
            <Typography>
              {profile.bio === null ? "No bio provided." : profile.bio}
            </Typography>
          </CardContent>
        </Card>

        <Typography color="primary" className={classes.marginTop}>
          <h1>Shared Items</h1>
        </Typography>

        <Grid item xs="auto">
          <Grid container justify="center" spacing={3}>
            {profile.items.map(item => (
              <Grid key={item.id} item>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileCard);
