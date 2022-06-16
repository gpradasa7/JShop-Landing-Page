import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} className="marcas">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            className="main-title-section4"
          >
            Join J-Shop’s Family
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ display: "flex" }}>
        <Grid item xs={12} className="marcas">
          <TextField
            id="standard-basic"
            placeholder="Enter your email"
            variant="standard"
          />
          <Button variant="contained" size="large" className="btn">
            JOIN FAMILY
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsLetter;
