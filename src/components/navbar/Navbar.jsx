import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250, height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
      <Stack
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ color: "black" }}
      >
        <Link
          spy={true}
          smooth={true}
          to="about"
          style={{ color: "black" }}
          onClick={handleCloseNavMenu}
        >
          About
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="products"
          style={{ color: "black" }}
          onClick={handleCloseNavMenu}
        >
          Products
        </Link>
        <Link
          spy={true}
          smooth={true}
          style={{ color: "black" }}
          to="footer"
          onClick={handleCloseNavMenu}
        >
          Footer
        </Link>
        <Link
          spy={true}
          smooth={true}
          style={{ color: "black" }}
          to="service"
          onClick={handleCloseNavMenu}
        >
          Service
        </Link>
      </Stack>
    </Box>
  );
  return (
    <div>
      <div className="baseline">
        <Stack
          pl={10}
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Link
            spy={true}
            smooth={true}
            to="service"
            style={{ cursor: "pointer", fontWeight: "700", fontSize: "22px" }}
            onClick={handleCloseNavMenu}
          >
            Akdepe Hyzmat
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="service"
            style={{ cursor: "pointer", paddingLeft: "50px" }}
            onClick={handleCloseNavMenu}
          >
            Hyzmatlar
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="products"
            style={{ cursor: "pointer" }}
            onClick={handleCloseNavMenu}
          >
            Onumlerimiz
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="about"
            style={{ cursor: "pointer" }}
            onClick={handleCloseNavMenu}
          >
            Biz barada
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="contact"
            style={{ cursor: "pointer" }}
            onClick={handleCloseNavMenu}
          >
            Habarlasmak
          </Link>
        </Stack>
      </div>
      <div className="mediaNavbar">
        <React.Fragment>
          <Stack direction="row" alignItems={"center"} pt={2}>
            <IconButton>
              <MenuIcon onClick={toggleDrawer(true)} />
            </IconButton>
          </Stack>
          <SwipeableDrawer
            right={"right"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Navbar;
