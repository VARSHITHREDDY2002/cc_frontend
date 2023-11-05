import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../common/logo1.jpg";

const Navbarer = (activePage) => {
  const navigate = useNavigate();
  const [isaddtocartHovering, setaddtocartHovering] = useState(false);
  const [iscarterHovering, setcarterHovering] = useState(false);
  const [isuprofiHovering, setuprofiHovering] = useState(false);
  const [isulogoutHovering, setulogoutHovering] = useState(false);
  const [isFavorHovering, setFavorHovering] = useState(false);
  const [isSkHovering, setSkHovering] = useState(false);
  const handleAddtocartHover = () => {
    setaddtocartHovering(true);
  };
  const handleAddtocartLeave = () => {
    setaddtocartHovering(false);
  };
  const handlecarterHover = () => {
    setcarterHovering(true);
  };
  const handlecarterLeave = () => {
    setcarterHovering(false);
  };
  const handleprofileHover = () => {
    setuprofiHovering(true);
  };
  const handleprofileLeave = () => {
    setuprofiHovering(false);
  };
  const handlelogoutHover = () => {
    setulogoutHovering(true);
  };
  const handlelogoutLeave = () => {
    setulogoutHovering(false);
  };
  const handleFavourHover = () => {
    setFavorHovering(true);
  };
  const handleFavourLeave = () => {
    setFavorHovering(false);
  };
  const handleSkHover = () => {
    setSkHovering(true);
  };
  const handleSkLeave = () => {
    setSkHovering(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          marginTop: "5px",
          color: "black",
        }}
      >
        <Toolbar>
          <div
            className="logo"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            <img
              onClick={() => navigate("/uprofi")}
              src={logo}
              alt="Logo"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onMouseEnter={handleAddtocartHover}
            onMouseLeave={handleAddtocartLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "addtocart" || isaddtocartHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: isaddtocartHovering || activePage.activePage === "addtocart" ? "20px" : "",
            }}
            onClick={() => navigate("/addtocart")}
          >
            Items
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handlecarterHover}
            onMouseLeave={handlecarterLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "carter" || iscarterHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: iscarterHovering || activePage.activePage === "carter" ? "20px" : "",
            }}
            onClick={() => navigate("/carter")}
          >
            MyCart
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handleprofileHover}
            onMouseLeave={handleprofileLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "uprofi" || isuprofiHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: isuprofiHovering || activePage.activePage === "uprofi" ? "20px" : "",
            }}
            onClick={() => navigate("/uprofi")}
          >
            My Profile
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handlelogoutHover}
            onMouseLeave={handlelogoutLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "ulogout" || isulogoutHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: isulogoutHovering || activePage.activePage === "ulogout" ? "20px" : "",
            }}
            onClick={() => navigate("/ulogout")}
          >
            Logout
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          {/* <Button
            onMouseEnter={handleFavourHover}
            onMouseLeave={handleFavourLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "Favour" || isFavorHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: isFavorHovering || activePage.activePage === "Favour"? "20px" : "",
            }}
            onClick={() => navigate("/Favour")}
          >
            Favourites
          </Button> */}
          <Button
            onMouseEnter={handleSkHover}
            onMouseLeave={handleSkLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "Sk" || isSkHovering
                  ? "#fe8d04"
                  : "white",
              width: "20px",
              // border: "1px solid black",
              borderRadius: isSkHovering || activePage.activePage === "Sk"? "20px" : "",
            }}
            onClick={() => navigate("/Sk")}
          >
            Mywallet
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbarer;
