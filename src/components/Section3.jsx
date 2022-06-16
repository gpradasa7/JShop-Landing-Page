import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import anillonegro from "../assets/anillonegro.png";
import { Box, Button, IconButton } from "@mui/material";

function Section3() {
  return (
    <div>
      <Card
        sx={{ display: "flex", marginTop: "5%", height: "80vh" }}
        className="backgrond"
      >
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
            Gold Black Coral Ring
          </Typography>
          <Typography variant="body2" className="p-section2">
            A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips,
            14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our
            valued International Customers, an extra CITES charge will be added
            to your order.
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
          <span className="price">320.99</span>
        </CardContent>
        <CardMedia
          className="backgrond"
          component="img"
          alt="green iguana"
          sx={{ maxWidth: "40%", marginTop: "5%", marginLeft: "10%" }}
          height="320"
          src={anillonegro}
        />
      </Card>
    </div>
  );
}
export default Section3;
