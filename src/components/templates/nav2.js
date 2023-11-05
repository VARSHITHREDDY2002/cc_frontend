import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../common/logo1.jpg";

const Navbarers = (activePage) => {
  const navigate = useNavigate();
  const [isitemsHovering, setitemsHovering] = useState(false);
  const [isprofileHovering, setprofileHovering] = useState(false);
  const [islogoutHovering, setlogoutHovering] = useState(false);
  const [isaddfoodHovering, setaddfoodHovering] = useState(false);
  const [isordersHovering, setordersHovering] = useState(false);
  const [isvstatiHovering, setvstatiHovering] = useState(false);
  // my items
  const handleitemsHover = () => {
    setitemsHovering(true);
  };
  const handleitemsLeave = () => {
    setitemsHovering(false);
  };
  //my profile
  const handleprofileHover = () => {
    setprofileHovering(true);
  };
  const handleprofileLeave = () => {
    setprofileHovering(false);
  };
  //logout
  const handlelogoutHover = () => {
    setlogoutHovering(true);
  };
  const handlelogoutLeave = () => {
    setlogoutHovering(false);
  };
  //add food items
  const handleAddFoodHover = () => {
    setaddfoodHovering(true);
  };
  const handleAddFoodLeave = () => {
    setaddfoodHovering(false);
  };
  // orders
  const handleOrdersHover = () => {
    setordersHovering(true);
  };
  const handleOrdersLeave = () => {
    setordersHovering(false);
  };
  //statistics
  const handlestatiHover = () => {
    setvstatiHovering(true);
  };
  const handlestatiLeave = () => {
    setvstatiHovering(false);
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
              onClick={() => navigate("/vprofi")}
              src={logo}
              alt="Logo"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onMouseEnter={handleitemsHover}
            onMouseLeave={handleitemsLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "viewf" || isitemsHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                isitemsHovering || activePage.activePage === "viewf"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/viewf")}
          >
            MyItems
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handleprofileHover}
            onMouseLeave={handleprofileLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "vprofi" || isprofileHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                isprofileHovering || activePage.activePage === "vprofi"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/vprofi")}
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
                activePage.activePage === "vlogout" || islogoutHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                islogoutHovering || activePage.activePage === "vprofi"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/vlogout")}
          >
            LogOut
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handleAddFoodHover}
            onMouseLeave={handleAddFoodLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "addfood" || isaddfoodHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                isaddfoodHovering || activePage.activePage === "addfood"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/addfood")}
          >
            AddFoodItem
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handleOrdersHover}
            onMouseLeave={handleOrdersLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "aag" || isordersHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                isordersHovering || activePage.activePage === "aag"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/aag")}
          >
            Orders
          </Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button
            onMouseEnter={handlestatiHover}
            onMouseLeave={handlestatiLeave}
            color="inherit"
            style={{
              backgroundColor:
                activePage.activePage === "vstati" || isvstatiHovering
                  ? "#fe8d04"
                  : "white",

              width: "20px",
              // border: "1px solid black",
              borderRadius:
                isvstatiHovering || activePage.activePage === "vstati"
                  ? "20px"
                  : "",
            }}
            onClick={() => navigate("/vstati")}
          >
            statistics
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbarers;
