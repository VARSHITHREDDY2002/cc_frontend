import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbarers from "../templates/nav2";

const Prom = (props) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://cc-backend-n5nv.onrender.com/profile") // unimplemented
      .then((response) => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbarers />
      <br />
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Vendor Home</h1>
        <br />
      </div>
    </>
  );
};

export default Prom;
