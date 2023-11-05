import React from "react";
import { useEffect, useState } from "react";
import Navbarer from "../templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
// import './PasswordInput.css';

const Uprof = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [batchName, setBatchName] = useState("");
  const [wallet, setwallet] = useState("");
  const [activePage, setActivePage] = useState("uprofi");
  const navigate = useNavigate();

  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
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

  const newUser = {
    emaile: localStorage.getItem("uemail"),
  };

  useEffect(() => {
    axios
      .post("http://localhost:4000/user/getinfo", newUser)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setContactNumber(response.data.contactNumber);
        setPassword(response.data.password);
        setAge(response.data.age);
        setBatchName(response.data.batchName);
        setwallet(response.data.wallet);
      });
  }, []);

  const resetInputs = () => {
    setName({ name });
    setEmail({ email });
    setPassword({ password });
    setContactNumber({ contactNumber });
    setAge({ age });
    setBatchName({ batchName });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const neeUser = {
      name: name,
      email: localStorage.getItem("uemail"),
      password: password,
      contactNumber: contactNumber,
      age: age,
      batchName: batchName,
    };

    axios
      .post("http://localhost:4000/user/bupdate", neeUser)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
      });

    //
    // navigate("/uprofi");
  };

  //setName({hamm});

  //resetInputs();

  return (
    <>
      <Navbarer activePage={activePage} />
      <br />
      <div className="container">
        <div style={{ textAlign: "center" }}>Name : {name}</div>
        <div style={{ textAlign: "center" }}>
          ContactNumber : {contactNumber}
        </div>
        <div style={{ textAlign: "center" }}>Age : {age}</div>
        <div style={{ textAlign: "center" }}>BatchName : {batchName}</div>
        <div style={{ textAlign: "center" }}>wallet : {wallet}</div>
        <br />

        {/* <div className="password-input-container">
      <TextField
        label="Password"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <IconButton onClick={togglePasswordVisibility}>
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
         </div> */}

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

          <Grid item xs={12} style={{ boxSizing: "border-box" }}>
            <TextField
              style={{ width: "250px" }}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChangePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} style={{margin:"0px", padding: "0px", minWidth:"0px"}}>
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
              style={{ width: "250px" }}
              label="ContactNumber"
              variant="outlined"
              value={contactNumber}
              onChange={onChangecontactNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "250px" }}
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "250px" }}
              label="BatchName"
              variant="outlined"
              value={batchName}
              onChange={onChangebatchaName}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              style={{
                backgroundColor: "#ff8521",
              }}
              variant="contained"
              onClick={onSubmit}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Uprof;
