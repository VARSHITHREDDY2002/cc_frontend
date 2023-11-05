import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbarer from "../templates/nav1";

const Pro = (props) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile") // unimplemented
      .then((response) => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbarer />
      <div className="container">
        <br />
        <h1 style={{ textAlign: "center" }}>Buyer Home page</h1>
      </div>
    </>
  );
};

export default Pro;
