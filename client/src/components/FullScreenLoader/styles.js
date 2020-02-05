import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    loader: {
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    text: {
      margin: "0",
      position: "absolute",
      top: "60%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  });

export default styles;
