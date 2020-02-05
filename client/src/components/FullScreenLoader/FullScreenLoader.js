import React from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";
import { Typography } from "@material-ui/core";

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
export default withStyles(styles)(CircularDeterminate);
