// PrivateRoute.js
import React from "react";
import {Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const userEmail = localStorage.getItem("uemail");

  if (userEmail !== "") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
