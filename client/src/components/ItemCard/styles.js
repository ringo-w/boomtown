import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      minWidth: 380,
      minHeight: 400
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
    }
  });

export default styles;
