import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1
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
      // },
      // sideBySide: {
      //   display: "grid",
      //   gridTemplateColumns: "1fr 1fr"
    }
  });

export default styles;
