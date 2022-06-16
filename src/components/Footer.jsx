import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="marcas">
        <div className="footer">
          <h3>Product</h3>
          <span>Email Row</span>
          <span>Free Tools</span>
          <span>Agents</span>
          <span>Blog</span>
        </div>
        <div>
          <div className="footer">
            <h3>Resources</h3>
            <span>Our Agents</span>
            <span>Member Stories</span>
            <span>Video</span>
            <span>Free trial</span>
          </div>
        </div>

        <div className="footer">
          <h3>Company</h3>
          <span>Patnerships</span>
          <span>Terms of use</span>
          <span>Privacy</span>
          <span>Sitemap</span>
        </div>

        <div className="footer">
          <h3>Get in touch</h3>
          <p>You’ll find your next Marketing value you prefer.</p>
          <icons></icons>
        </div>
      </div>
      <div className="postfooter">
        <Grid spacing={1} container item xs={12} className="marcas">
          Copyright 2021 j-shop.com, All rights reserved.
        </Grid>
      </div>
    </>
  );
};

export default Footer;
