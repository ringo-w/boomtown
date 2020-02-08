import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      width: 350,
      height: 450
    },
    media: {
      height: 200
    },
    pad: {
      padding: "20"
    },
    tagGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    spaced: {
      display: "flex"
    },
    flex: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 10
    },
    link: {
      color: "black"
    }
  });

export default styles;
