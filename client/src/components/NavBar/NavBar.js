import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import logo from "../../images/boomtown.svg";

class NavBar extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.end}>
            <IconButton edge="start">
              <img src={logo} className={classes.logo} alt="boomtown" />
            </IconButton>
            <div>
              <Button color="inherit">
                <AddCircleIcon />
                Share Something
              </Button>
              <IconButton
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(NavBar);
