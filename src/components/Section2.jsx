import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import manilla from "../assets/manilla.png";
import { Box, Button, IconButton } from "@mui/material";

function Section2() {
  return (
    <div>
      <Card
        sx={{ display: "flex", marginTop: "5%", height: "80vh" }}
        className="backgrond"
      >
        <CardMedia
          className="backgrond"
          component="img"
          alt="green iguana"
          sx={{ maxWidth: "40%", marginTop: "5%", marginLeft: "10%" }}
          height="320"
          src={manilla}
        />
        <CardContent
          sx={{ maxWidth: "40%", marginLeft: "10%" }}
          className="contentSection2"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="title-section2"
          >
            Gold Woven Chain Bracelet in Black
          </Typography>
          <Typography variant="body2" className="p-section2">
            modern jewelry is made of gold, silver, or platinum, often with
            precious or semiprecious stones, it evolved from shells, animal
            teeth, and other items used as body decoration in prehistoric times.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <h4>Size</h4>
            <IconButton aria-label="previous">S</IconButton>
            <IconButton aria-label="play/pause"> M</IconButton>

            <IconButton aria-label="next"> L</IconButton>
          </Box>
          <Button variant="contained" size="large" className="btn">
            Add to cart
          </Button>
          <span className="price">549.29</span>
        </CardContent>
      </Card>
    </div>
  );
}
export default Section2;
