import React from "react";
import { Button, Menu, MenuItem, AppBar, IconButton } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import logo from "../../images/boomtown.svg";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Link from "@material-ui/core/Link";
import { Mutation } from "react-apollo";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

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
    <div>
      <Mutation
        mutation={LOGOUT_MUTATION}
        refetchQueries={[{ query: VIEWER_QUERY }]}
      >
        {logout => (
          <AppBar className={classes.nav}>
            <Toolbar className={classes.addSpace}>
              <IconButton edge="start" href="/items">
                <img src={logo} alt="boomtown" className={classes.logo} />
              </IconButton>
              <div className={classes.addSpace}>
                <Button
                  color="inherit"
                  className={classes.roundBorder}
                  variant="text"
                  style={{
                    display:
                      props.location.pathname === "/share" ? "none" : "block"
                  }}
                  href="/share"
                >
                  <AddCircleIcon className={classes.circle} />
                  {/* <Typography className={classes.text}> */}
                  Share Something
                  {/* </Typography> */}
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
                    className={classes.roundBorder}
                  >
                    <Link href="/profile" color="secondary" underline="none">
                      <MenuItem onClick={handleClose} className={classes.menu}>
                        <FingerprintIcon className={classes.addMargin} />
                        Profile
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        logout();
                      }}
                      className={classes.menu}
                    >
                      <PowerSettingsNewIcon className={classes.addMargin} />
                      Sign Out
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        )}
      </Mutation>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutMutation: PropTypes.func
};
export default withRouter(withStyles(styles)(NavBar));
