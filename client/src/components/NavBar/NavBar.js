import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import logo from "../../images/boomtown.svg";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { classes } = props;

  return (
    <div
      style={{
        display: window.location.pathname == "/home" ? "none" : "block"
      }}
    >
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.end}>
          <IconButton edge="start">
            <img src={logo} alt="boomtown" className={classes.logo} />
          </IconButton>
          <div>
            <Button
              color="inherit"
              className={classes.roundBorder}
              style={{
                display:
                  window.location.pathname !== "/share" ? "block" : "none"
              }}
            >
              <AddCircleIcon className={classes.addGap} />
              Share Something
            </Button>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreIcon />
            </IconButton>
            <div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} className={classes.menu}>
                  <FingerprintIcon className={classes.addMargin} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menu}>
                  <PowerSettingsNewIcon className={classes.addMargin} />
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);
