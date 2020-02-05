import React from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

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
    <div className={classes.loader}>
      <CircularProgress
        variant="determinate"
        value={progress}
        color="secondary"
        size={100}
      />
    </div>
  );
}
export default withStyles(styles)(CircularDeterminate);
