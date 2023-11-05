import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../common/logo1.jpg";
const Navbar = () => {
  const navigate = useNavigate();
  const [isRegisterHovering, setIsRegisterHovering] = useState(false);
  const [isLoginHovering, setIsLoginHovering] = useState(false);
  const handleRegisterHover = () => {
    setIsRegisterHovering(true);
  };
  const handleRegisterLeave = () => {
    setIsRegisterHovering(false);
  };
  const handleLoginHover = () => {
    setIsLoginHovering(true);
  };
  const handleLoginLeave = () => {
    setIsLoginHovering(false);
  };
  const RegbuttonStyle = {
    backgroundColor: "#fe8d04",
    border: "black",
    color: "white",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
    borderRadius: isRegisterHovering ? "50px" : "10px",
    // border: "1px solid black",
  };
  const LogbuttonStyle = {
    backgroundColor: "#fe8d04",
    border: "black",
    color: "white",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
    borderRadius: isLoginHovering ? "50px" : "10px",
    // border: "1px solid black",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent", marginTop:"5px"}}>
        <Toolbar>
          <div className="logo" style={{ width: "70px", height: "70px", borderRadius: "50%", padding: "5px"}}>
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Logo"
              style={{ width: "70px", height: "70px",borderRadius: "50%"}}
            />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <button
            onMouseEnter={handleRegisterHover}
            onMouseLeave={handleRegisterLeave}
            onClick={() => navigate("/register")}
            style={RegbuttonStyle}
          >
            Register
          </button>
          <Box sx={{ flexGrow: 0.01 }} />
          <button
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
            onClick={() => navigate("/Login")}
            style={LogbuttonStyle}
          >
            Login
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
