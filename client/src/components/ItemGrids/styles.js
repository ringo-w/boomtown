// import { createStyles } from "@material-ui/styles";

// const styles = () =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-around"
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//       transform: "translateZ(0)"
//     }
//   });

// export default styles;

import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1
    }
  });

export default styles;
