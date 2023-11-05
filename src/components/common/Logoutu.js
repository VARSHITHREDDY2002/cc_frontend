import React from "react";
import { useState, useEffect } from "react";
import Navbarer from "../templates/nav1";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Homer = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activePage, setActivePage] = useState("ulogout");
  const navigate = useNavigate();

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return (
    <>
      <Navbarer activePage={activePage} />
      <br />
      <div className="container">
        <div style={{ textAlign: "center", flexDirection: "column" }}>
          Click Yes if want to Log out..! <br />
          <br />
          <Button
            style={{
              backgroundColor: "#e0403a",
            }}
            variant="contained"
            onClick={() => {
              localStorage.setItem("uemail", "");
              navigate("/Login");
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Homer;
