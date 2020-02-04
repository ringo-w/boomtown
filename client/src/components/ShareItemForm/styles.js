const styles = theme => ({
  container: {
    display: "grid",
    justifyContent: "center",
    lineHeight: 2
  },
  textField: {
    marginTop: "1.5rem",
    width: "100%"
  },
  dense: {
    marginTop: 19
  },
  header: {
    fontSize: "2.8rem",
    fontWeight: 700,
    lineHeight: "1"
  },
  headerTwo: {
    fontSize: "2.8rem",
    fontWeight: 700,
    lineHeight: "1",
    marginBottom: "2rem"
  },
  imageButton: {
    background: theme.palette.primary.main,
    width: "100%"
  },
  shareButton: {
    background: theme.palette.primary.main,
    marginTop: "2rem",
    padding: "0.5rem 1.5rem"
  },
  tags: {
    display: "flex",
    flexFlow: "rowWrap"
  },
  addWidth: {
    width: "425px"
  },
  addGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  }
});

export default styles;
