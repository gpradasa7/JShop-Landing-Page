import { CardMedia, Grid } from "@mui/material";
import React from "react";
import marcas from "../assets/marcas.png";

const Section5 = () => {
  return (
    <div>
      <Grid container spacing={0} sx={{ display: "flex" }}>
        <Grid item xs={12} className="marcas">
          Trusted by leading companies
        </Grid>
      </Grid>
      <div className="marcas">
        <CardMedia
          className="backgrond"
          component="img"
          alt="green iguana"
          sx={{ maxWidth: "70%", minHeight: "100%" }}
          height="auto"
          src={marcas}
        />
      </div>
    </div>
  );
};

export default Section5;
