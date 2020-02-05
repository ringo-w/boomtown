import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemFormPreview from "../../components/ShareItemFormPreview";

const Share = props => {
  const { classes, tags } = props;
  return (
    <div className={classes.divider}>
      <ShareItemFormPreview />
      <ShareItemForm tags={tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
