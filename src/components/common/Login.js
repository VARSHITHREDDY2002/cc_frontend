import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/user/login", newUser).then((response) => {
      alert(response.data);

      if (response.data === "Buyer Logged In") {
        localStorage.setItem("uemail", email);

        navigate("/nav");
      } else if (response.data === "Vendor Logged In") {
        localStorage.setItem("uemail", email);

        navigate("/navl");
      }

      console.log(response.data);
    });

    resetInputs();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <br />

        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              autoComplete="off"
              onChange={onChangeEmail}
              style={{ width: "250px"}}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={{ width: "250px" }}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              autoComplete="off"
              onChange={onChangePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end" style={{margin:"0px", padding: "0px", minWidth:"0px"}}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <a
              onClick={() => {
                navigate("/fog");
              }}
              style={{
                border: "none",
                fontSize: "15px",
                margin: "5px",
                padding: "2px",
                background: "transparent",
                cursor: "pointer",
                color: "#ff8521",
                fontWeight: "bolder"
              }}
            >
              Forgot Password?
            </a>
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                backgroundColor: "#bd7454",
              }}
              variant="contained"
              onClick={onSubmit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
