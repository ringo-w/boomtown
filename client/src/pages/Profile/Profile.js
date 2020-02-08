import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";

const Profile = ({ profile, viewer }) => {
  return (
    <div>
      <ProfileCard profile={profile} viewer={viewer} />
    </div>
  );
};

export default withStyles(styles)(Profile);
