import React from "react";
import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import "../styles/ContainerMain.css";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import { Section4 } from "../components/Section4";
import Section5 from "../components/Section5";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import OurBlogs from "../components/OurBlog";
import Footer from "../components/Footer";

function ContainerMain() {
  return (
    <div className="backgrond">
      <CssBaseline />
      <Container className="back" maxWidth="lg" sx={{ height: "100vh" }}>
        <Box>
          <Navbar />
        </Box>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonial />
        <NewsLetter />
        <OurBlogs />
        <Footer />
      </Container>
    </div>
  );
}

export default ContainerMain;
