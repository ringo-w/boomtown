import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    nav: {
      position: "fixed",
      top: 0,
      width: "100%"
    },
    logo: {
      width: 30
    },
    addSpace: {
      display: "flex",
      justifyContent: "space-between"
    },
    circle: {
      position: "relative",
      top: 8,
      right: 5,
      transform: "scale(0.85)"
    },
    menu: {
      width: 170
    },
    addMargin: {
      marginRight: 25
    },
    roundBorder: {
      borderRadius: 50
    }
  });

export default styles;
