import React from "react";
import { useState, useEffect } from "react";
import Navbarer from "../templates/nav1";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import axios from "axios";

const Homersa = (props) => {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState("Favour");
  const [favours,setFavours]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const news = {
      email: localStorage.getItem("uemail"),
    };
    axios
      .post("http://localhost:4000/user/tenner", news)
      .then((response) => {
        setUsers(response.data.favs);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .post("http://localhost:4000/user/favourites", users)
      .then((response) => {
        setFavours(response.data.ans);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbarer activePage={activePage} />
      <br />
      <div className="container">
        <div style={{ textAlign: "center", color: "#bd7454" }}>
          <h1>Favourites Dishes</h1>
        </div>
        <Grid>
          <Grid>
            <Paper>
              <Table size="large">
                <TableHead>
                  <TableRow>
                    <TableCell> Sr No.</TableCell>

                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {favours.map((favour, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind + 1}</TableCell>

                      <TableCell>{favour.name}</TableCell>
                      <TableCell>{favour.shopname}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Homersa;
