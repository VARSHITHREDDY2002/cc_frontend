import React from "react";
import { useEffect, useState } from "react";
import Navbarer from "../templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Uprof = (props) => {
  const [wallet, setwallet] = useState("");
  const [activePage, setActivePage] = useState("Sk");
  const navigate = useNavigate();

  const onChangewallet = (event) => {
    setwallet(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const neeUser = {
      email: localStorage.getItem("uemail"),
      wallet: wallet,
    };

    axios
      .post("https://cc-backend-n5nv.onrender.com/user/walletism", neeUser)
      .then((response) => {
        alert("Added Successfully");
        console.log(response.data);
      });
    setwallet("");
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
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="AddMoney"
              variant="outlined"
              value={wallet}
              onChange={onChangewallet}
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
              Add Money
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Uprof;
