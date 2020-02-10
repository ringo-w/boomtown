import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemFormPreview from "../../components/ShareItemFormPreview";
import PropTypes from "prop-types";

const Share = props => {
  const { classes, tags } = props;
  return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <ShareItemFormPreview />
        <ShareItemForm tags={tags} />
      </div>
    </div>
  );
};

Share.propTypes = {
  tags: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Share);
