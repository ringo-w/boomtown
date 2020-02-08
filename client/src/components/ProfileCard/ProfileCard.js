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
      <div>
        <Card>
          <CardContent>
            <Gravatar email={profile.email} />
            <Typography>{profile.fullname}</Typography>
            <span>{profile.items.length} Items Shared</span>
            <span>{profile.borrowed.length} Items Borrowed</span>
            <Typography>
              {profile.bio === null ? "No bio provided." : profile.bio}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <Typography>Shared Items</Typography>
        </Card>
        <Grid container spacing={3}>
          {profile.items.map(item => {
            return (
              <Grid key={item.id} xs={12}>
                <ItemCard profile={profile} viewer={viewer} item={item} />
              </Grid>
            );
          })}
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
