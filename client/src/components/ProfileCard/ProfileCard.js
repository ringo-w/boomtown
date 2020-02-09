import React, { Component } from "react";
import Gravatar from "react-gravatar";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import ItemCard from "../ItemCard";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

class ProfileCard extends Component {
  render() {
    const { profile, viewer, classes } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <Gravatar email={profile.email} className={classes.gravatar} />
            <Typography>{profile.fullname}</Typography>
            <span>{profile.items.length} Items Shared</span>
            <span>{profile.borrowed.length} Items Borrowed</span>
            <Typography>
              {profile.bio === null ? "No bio provided." : profile.bio}
            </Typography>
          </CardContent>
        </Card>

        <Typography color="primary">Shared Items</Typography>

        <Grid item xs="auto">
          <Grid container justify="center" spacing={3}>
            {profile.items.map(item => (
              <Grid key={item.id} item>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Typography>
          {profile.borrowed.id}
          Borrowed Items
        </Typography>
        <Grid container spacing={3}>
          {profile.borrowed.map(item => {
            return (
              <Grid key={item.id} xs={12}>
                <ItemCard profile={profile} viewer={viewer} item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);
