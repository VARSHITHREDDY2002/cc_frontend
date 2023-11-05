import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import emailjs from "@emailjs/browser";

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const Register = (props) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {
    setEmail("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email);
const message = generateRandomString(6);
    const newUser={
        email:email,
        password:message,
    };
    emailjs
      .send(
        "service_kco8l4i",
        "template_tddvb9i",
        {
          to_mail: email,
          message: message,
        },
        "YBRAgph4SiNcQNH2y"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        axios
        .post("http://localhost:4000/user/passwordupdate", newUser)
        .then((response) => {
          // alert("Successfully added");
          // console.log(response.data);
          alert(response.data);
          navigate("/login");

        });
  

        resetInputs();
      })
      .catch((error) => {
        console.error("Email not sent:", error);
      });
    // navigate("/login");
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
