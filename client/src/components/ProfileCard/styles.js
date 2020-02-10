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
      display: "flex",
      borderRadius: 5,
      width: "88.5vw",
      margin: "auto",
      paddingLeft: "20px",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "space-evenly",
      minHeight: 225
    },
    title: {
      paddingTop: "40px",
      paddingLeft: "60px",
      paddingBottom: "5px"
    },
    username: {
      display: "flex",
      alignItems: "center",
      paddingBottom: "10px"
    },
    pad: { padding: "120px 10px 10px 10px" },
    bold: { fontWeight: 900 }
  });

export default styles;
