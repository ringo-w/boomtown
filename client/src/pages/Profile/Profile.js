import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import PropTypes from "prop-types";

const Profile = ({ profile, viewer }) => {
  return (
    <div>
      <ProfileCard profile={profile} viewer={viewer} />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired
};
export default withStyles(styles)(Profile);
