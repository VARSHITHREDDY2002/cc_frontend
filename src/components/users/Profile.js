import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";

const Profile = (props) => {
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
      <Navbar />
      <br />
    </>
  );
};

export default Profile;
