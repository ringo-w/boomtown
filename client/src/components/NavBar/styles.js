import { createStyles } from "@material-ui/styles";

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: theme.spacing(2),
    title: {
      flexGrow: 1
    },
    logo: {
      height: 46,
      width: 40
    },
    end: {
      justifyContent: "space-between"
    }
  });

export default styles;
