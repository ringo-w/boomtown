import React, { Component } from "react";
import Gravatar from "react-gravatar";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import ItemCard from "../ItemCard";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

class ProfileCard extends Component {
  render() {
    const { profile, classes } = this.props;
    return (
      <div className={classes.pad}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.username}>
              <Gravatar email={profile.email} className={classes.gravatar} />
              <Typography variant="h4">{profile.fullname}</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <span className={classes.bold}>{profile.items.length}</span>{" "}
                Items shared,{" "}
                <span className={classes.bold}>{profile.borrowed.length}</span>{" "}
                Items borrowed
              </Typography>
            </div>
            <Typography variant="caption">
              {profile.bio === null ? '"No bio provided."' : profile.bio}
            </Typography>
          </CardContent>
        </Card>

        <Grid item xs="auto">
          <Typography color="primary" variant="h4" className={classes.title}>
            Shared Items
          </Typography>
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
  profile: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileCard);
