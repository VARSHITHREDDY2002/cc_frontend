import React from "react";
import { useEffect, useState } from "react";
import Navbarer from "../templates/nav1";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Navbarers from "../templates/nav2";

const Vedit = (props) => {
  const [name, setName] = useState("");
  const [type, settype] = useState("");
  const [Price, setPrice] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangetype = (event) => {
    settype(event.target.value);
  };

  const onChangeprice = (event) => {
    setPrice(event.target.value);
  };

  const newUser = {
    id: localStorage.getItem("vendor_id"),
  };

  useEffect(() => {
    axios
      .post("https://cc-backend-n5nv.onrender.com/user/editgetinfo", newUser)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        settype(response.data.type);
        setPrice(response.data.price);
      });
  }, []);

  const resetInputs = () => {
    setName({ name });
    settype({ type });
    setPrice({ Price });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const neeUser = {
      name: name,
      id: localStorage.getItem("vendor_id"),
      type: type,
      price: Price,
    };

    axios
      .post("https://cc-backend-n5nv.onrender.com/user/foodupdate", neeUser)
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
      <Navbarers />

      <br />
      <div className="container">
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Type"
              variant="outlined"
              value={type}
              onChange={onChangetype}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              variant="outlined"
              value={Price}
              onChange={onChangeprice}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={onSubmit}>
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Vedit;
