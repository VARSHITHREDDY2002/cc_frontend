import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "./logo1.jpg";

const Home = (props) => {
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
    textAlign: "center",
    textDecoration: "none",
    borderRadius: isRegisterHovering ? "50px" : "10px",
    // border: "1px solid black",
  };
  const LogbuttonStyle = {
    backgroundColor: "#fe8d04",
    border: "black",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: isLoginHovering ? "50px" : "10px",
    // border: "1px solid black",
  };

  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <div className="con">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="logo"
        />
        <br />
        <br />
        <div className="button-container">
          <button
            onMouseEnter={handleRegisterHover}
            onMouseLeave={handleRegisterLeave}
            onClick={() => navigate("/register")}
            style={RegbuttonStyle}
          >
            Register
          </button>
          <button
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
            onClick={() => navigate("/Login")}
            style={LogbuttonStyle}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
