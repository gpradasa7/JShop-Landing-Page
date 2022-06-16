import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import manoscruzadas from "../assets/manoscruzadas.png";
import orejacuello from "../assets/orejacuello.png";
import manos from "../assets/manos.png";

const OurBlogs = () => {
  return (
    <div>
      <div className="marcas">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="main-title-section4"
        >
          Our Blogs
        </Typography>
      </div>

      <div sx={{ display: "flex" }} className="marcas">
        <Card sx={{ maxWidth: 200, margin: "0 15px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            src={manoscruzadas}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              For Beauty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Offending belonging promotion provision an be oh consulted
              ourselves it.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, margin: "0 15px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            src={orejacuello}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product Quality
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day necessary.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, margin: "0 15px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            src={manos}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              For Comfort
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Warmly little before cousin sussex entire men set. Blessing it
              ladyship on sensible judgment.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OurBlogs;
