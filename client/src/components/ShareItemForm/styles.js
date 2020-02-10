const styles = theme => ({
  container: {
    display: "grid",
    justifyContent: "center",
    lineHeight: 2
  },
  textField: {
    width: "100%"
  },
  header: {
    fontSize: "2.8rem",
    fontWeight: 700,
    lineHeight: "1"
  },
  headerTwo: {
    fontSize: "2.8rem",
    fontWeight: 700,
    lineHeight: "1"
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
    width: "425px",
    padding: "120px 10px 10px 10px"
  },
  addGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  tagContainer: {
    paddingTop: "25px"
  }
});

export default styles;
