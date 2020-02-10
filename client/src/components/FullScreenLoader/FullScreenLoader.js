import React from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function CircularDeterminate(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const { classes } = props;

  return (
    <div>
      <div className={classes.loader}>
        <CircularProgress
          variant="indeterminate"
          value={progress}
          color="primary"
          size={50}
        />
      </div>
      <div>
        <Typography color="primary" className={classes.text}>
          "For it is in giving that we receive."
        </Typography>
      </div>
    </div>
  );
}

CircularDeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularDeterminate);
