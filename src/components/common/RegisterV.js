import React from "react";
import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const Register = (props) => {
  const [name, setName] = useState("");
  const [shopname, setShopName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [opentime, setopentime] = useState("");
  const [closetime, setclosetime] = useState("");

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeShopName = (event) => {
    setShopName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangecontactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeOpentime = (event) => {
    setopentime(event.target.value);
  };

  const onChangeclosetime = (event) => {
    setclosetime(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setShopName("");
    setPassword("");
    setEmail("");
    setContactNumber("");
    setopentime("");
    setclosetime("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // if(!email.endsWith("@nitc.ac.in"))
    // {
    //    alert("Email should end with @nitc.ac.in");
    //    setEmail("");
    //    return;
    // }

    const newUser = {
      name: name,
      shopname: shopname,
      password: password,
      email: email,
      contactnumber: contactnumber,
      opentime: opentime,
      closetime: closetime,
    };

    axios.post("http://localhost:4000/user/vr", newUser).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("Created\t" + response.data.name);
      }
      console.log(response.data);
    });

    resetInputs();
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ShopName"
              variant="outlined"
              value={shopname}
              onChange={onChangeShopName}
              style={{ width: "250px" }}
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
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      style={{ margin: "0px", padding: "0px", minWidth: "0px" }}
                    >
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
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
              style={{ width: "250px" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="ContactNumber"
              variant="outlined"
              value={contactnumber}
              onChange={onChangecontactNumber}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="OpenTime"
              variant="outlined"
              value={opentime}
              onChange={onChangeOpentime}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CloseTime"
              variant="outlined"
              value={closetime}
              onChange={onChangeclosetime}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                backgroundColor: "#bd7454",
              }}
              variant="contained"
              onClick={onSubmit}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
