import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      transform: "scale(1)",
      width: 40
    },
    end: {
      justifyContent: "space-between"
    },
    menu: {
      width: 175
    },
    addMargin: {
      marginRight: 25
    },
    addGap: {
      justifyContent: "space-between"
    },
    roundBorder: {
      borderRadius: 50
    },
    sideBySide: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  });

export default styles;
