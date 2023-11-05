import React from "react";
import { useState, useEffect } from "react";
import Navbarers from "../templates/nav2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

const Homersk = (props) => {
  const [vendor, setVendors] = useState(0);
  const [users, setUsers] = useState([]);
  const [use, setUse] = useState(0);
  const [activePage, setActivePage] = useState("vstati");
  const navigate = useNavigate();

  var hello = 0;
  var yo = 0;
  var ko = 0;
  var money = 0;

  useEffect(() => {
    const mi = {
      email: localStorage.getItem("uemail"),
    };
    axios
      .post("http://localhost:4000/user/money", mi)
      .then((response) => {
        setVendors(response.data.money);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("http://localhost:4000/user/lening", mi)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbarers activePage={activePage} />
      <br />
      <div className="container">
        <h1 style={{ textAlign: "center" , color: "#bd7454" }}>Statistics</h1>
        <br />
        <Grid>
          <Grid item xs={12} md={9} lg={9}>
            <Paper>
              <Table size="small">
                <TableBody>
                  {users.map((user, ind) => (
                    <TableRow key={ind}>
                      {(() => {
                        //console.log(user);

                        if (user.status === "ReadyforPickup" && user.ratstatus==="false") {
                          hello = hello + 1;
                          // setUse(w);
                        } else if (user.ratstatus === "true"||user.status==="completed") {
                          yo = yo + 1;
                          // setUse(w);
                        } else {
                          ko = ko + 1;
                        }
                      })()}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        <div style={{ textAlign: "center" }}>
          Net Amount Received:{vendor}
          <br />
          Orders completed : {hello}
          <br />
          Orders delivered : {yo}
          <br />
          Orders Pending : {ko}
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#ff8521",
            }}
            variant="contained"
            onClick={() => {
              navigate("/top");
            }}
          >
            Top5 items
          </Button>
        </div>
      </div>
    </>
  );
};

export default Homersk;
