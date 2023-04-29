import React from "react";
import Products from "./components/Products";
import { Grid } from "@mui/material";
import Right from "./components/Right";
import Left from "./components/Left";

const App = () => {
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={3} >
          {/* <h1>left</h1> */}
          <Left />
        </Grid>
        <Grid item xs={8} >
          {/* <h1>left</h1> */}
          <Products />
        </Grid>
        <Grid item xs={1} >
          {/* <h1>left</h1> */}
          {/* <Right /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
