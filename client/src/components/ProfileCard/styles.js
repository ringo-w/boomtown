import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    gravatar: {
      height: 50,
      width: 50,
      marginRight: 20,
      borderRadius: "50%"
    },
    card: {
      marginTop: "2rem",
      display: "flex",
      borderRadius: 10,
      width: "90vw",
      margin: "auto"
    },
    marginTop: {
      position: "relative",
      marginTop: "20"
    },
    alignContent: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    details: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem"
    }
  });

export default styles;
