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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [batchName, setBatchName] = useState("");

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value);
  //   if(!email.endsWith("@nitc.ac.in"))
  //   {
  //     alert("email should ends with @nitc.ac.in");
  //   }
  // };

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail); // Update the email state with the new value
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChangecontactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangebatchaName = (event) => {
    setBatchName(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setContactNumber("");
    setAge("");
    setBatchName("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!email.endsWith("@nitc.ac.in")) {
      alert("email should ends with @nitc.ac.in");
      setEmail("");
      return;
    }
    const newUser = {
      name: name,
      email: email,
      password: password,
      contactNumber: contactNumber,
      age: age,
      batchName: batchName,
    };

    axios.post("http://localhost:4000/user/ur", newUser).then((response) => {
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
      <Navbar></Navbar>
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
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
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
              label="ContactNumber"
              variant="outlined"
              value={contactNumber}
              onChange={onChangecontactNumber}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="BatchName"
              variant="outlined"
              value={batchName}
              onChange={onChangebatchaName}
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
