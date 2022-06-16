import { CardMedia } from "@mui/material";
import React from "react";
import Testmonials from "../assets/Testmonials.png";
const Testimonial = () => {
  return (
    <div className="marcas ">
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: "70%", minHeight: "100%", marginTop: "25px" }}
        height="auto"
        src={Testmonials}
      />
    </div>
  );
};

export default Testimonial;
