import React from "react";
import { useEffect, useState } from "react";
import Navbarers from "../templates/nav2";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

const Vprof = (props) => {
  const [name, setName] = useState("");
  const [shopname, setShopName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [opentime, setopentime] = useState("");
  const [closetime, setclosetime] = useState("");
  const [counter, setcounter] = useState("");
  const [activePage, setActivePage] = useState("vprofi");
  const [showPassword, setShowPassword] = useState(false);

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

  const newUser = {
    email: localStorage.getItem("uemail"),
  };

  useEffect(() => {
    axios
      .post("http://localhost:4000/user/vgetinfo", newUser)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setContactNumber(response.data.contactnumber);
        setShopName(response.data.shopname);
        setPassword(response.data.password);
        setopentime(response.data.opentime);
        setclosetime(response.data.closetime);
        setcounter(response.data.counter);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const newVser = {
      name: name,
      shopname: shopname,
      password: password,
      email: localStorage.getItem("uemail"),
      contactnumber: contactnumber,
      opentime: opentime,
      closetime: closetime,
    };

    axios
      .post("http://localhost:4000/user/vupdate", newVser)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
      });

    alert("Updated");
  };

  return (
    <>
      <Navbarers activePage={activePage} />
      <br />
      <div className="container">
        <div style={{ textAlign: "center" }}>Name : {name}</div>
        <div style={{ textAlign: "center" }}>
          ContactNumber : {contactnumber}
        </div>
        <div style={{ textAlign: "center" }}>Shopname : {shopname}</div>
        {/* <div style={{ textAlign: "center" }}>Counter : {counter}</div> */}
        <br />
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
              onChange={onChangePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
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

export default Vprof;
