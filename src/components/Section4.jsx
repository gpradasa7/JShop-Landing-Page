import { Button, Grid } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import anillomano from "../assets/anillo-mano.png";
import collar from "../assets/collar.png";
import aretes from "../assets/aretes.png";
import React from "react";

export const Section4 = () => {
  return (
    <div>
      <Grid container spacing={1} className="grid">
        <Grid item xs={6} className="gridItem">
          <CardMedia
            className="backgrond"
            component="img"
            alt="green iguana"
            sx={{ maxWidth: "70%", minHeight: "100%" }}
            height="auto"
            src={anillomano}
          />
        </Grid>
        <Grid item xs={6} className="gridItem">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            className="main-title-section4"
          >
            J-Shop’s best Collections
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            className="main-title-section4"
          >
            Comfort
          </Typography>
          <p className="p-section4">
            We will reach out to you for the current cost of this permit. Please
            contact us for more information. Maui Divers Jewelry offers extended
            sizing which may be subject to an additional cost. Any subsequent
            resizes after purchase will incur an additional charge. Please note
            some styles cannot be resized due to their design.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="grid">
        <Grid item xs={6} className="gridItem">
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            className="second-title-section4"
          >
            100% Gold
          </Typography>
          <p className="p-section4">
            Gold chains were a sign of service to the supreme beings of a
            particular religion in the past. Nowadays, they are symbols of
            wealth and class. Rap artists were most likely the ones who brought
            the custom of wearing gold chains to modern men's everyday life.
            There are a few reasons why do men wear gold chains.
          </p>
        </Grid>
        <Grid item xs={6} className="gridItem">
          <CardMedia
            className="backgrond"
            component="img"
            alt="green iguana"
            sx={{ maxWidth: "70%", minHeight: "100%" }}
            height="auto"
            src={collar}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className="grid">
        <Grid item xs={6} className="gridItem">
          <CardMedia
            className="backgrond"
            component="img"
            alt="green iguana"
            sx={{ maxWidth: "70%", minHeight: "100%" }}
            height="auto"
            src={aretes}
          />
        </Grid>
        <Grid item xs={6} className="gridItem">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="second-title-section4"
          >
            Trendy
          </Typography>

          <p className="p-section4">
            A collection of hammered gold discs swing from the top and bottom of
            a shimmery gold hoop, creating a noisy fringe. Earring attaches to a
            standard fishhook fitting. Sold as one pair of earrings.Other hoop
            designs do not complete the circle, but penetrate through the ear in
            a post, using the same attachment techniques that apply to stud
            earrings.
          </p>
          <Button variant="contained" size="large" className="btn-section4">
            Go to Shop
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
