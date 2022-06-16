import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { RiMenu4Line, RiSearchLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../styles/Nabvar.css";
import React from "react";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar className="back">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="logo"
            >
              J-Shop
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="content">
                <span>Categories</span>
                <span>About</span>
                <span>Shop</span>
                <span>Contact</span>
              </div>
            </Typography>

            <Button className="primary">
              <span>
                <RiMenu4Line />
              </span>
            </Button>
            <Button className="primary">
              <span>
                <RiSearchLine />
              </span>
            </Button>
            <Button className="primary">
              <span>
                <MdOutlineShoppingCart />
              </span>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
