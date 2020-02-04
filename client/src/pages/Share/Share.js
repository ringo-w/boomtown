import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
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
