import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import anillo from "../assets/anillo.png";
import anillovertical from "../assets/anillovertical.png";
import play from "../assets/playbutton.png";
import "../styles/Sections.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function Section1() {
  return (
    <>
      <Card sx={{ display: "flex", height: "90vh" }} className="backgrond">
        <CardMedia
          className="backgrond"
          component="img"
          alt="green iguana"
          sx={{ maxWidth: "55%" }}
          height="350"
          src={anillo}
        />
        <CardContent sx={{ maxWidth: "30%", marginLeft: "10%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="title-section1"
          >
            Our Story
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="p-section1"
          >
            modern jewelry is made of gold, silver, or platinum, often with
            precious or semiprecious stones, it evolved from shells, animal
            teeth, and other items used as body decoration in prehistoric times.
          </Typography>

          <Box className="play">
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: "56px", margin: "10px" }}
              height="56px"
              src={play}
            />
            <Typography gutterBottom variant="h6" component="div">
              Play Video
            </Typography>
          </Box>
          <CardMedia
            className="backgrond"
            component="img"
            alt="green iguana"
            sx={{ maxWidth: "80%" }}
            height="550"
            src={anillovertical}
          />
        </CardContent>
      </Card>
      <Button className="Button">Explore</Button>

      <Typography
        gutterBottom
        variant="h2"
        component="div"
        className="main-title-section1"
      >
        Jewelery tells a great story
      </Typography>

      <Box
        sx={{
          width: 400,
          height: 150,
          backgroundColor: "primary.dark",
          display: "flex",
        }}
      >
        <div>
          <h3>Gold</h3>
          <p>Her provision acuteness had two why intention. </p>
        </div>

        <div>
          <h3>SILVER</h3>
          <p>Her provision acuteness had two why intention. </p>
        </div>
      </Box>
    </>
  );
}

export default Section1;
