import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Navbar from "../templates/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Navbarer from "../templates/nav1";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const Iod = (props) => {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState("addtocart");
  const navigate = useNavigate();

  const don = new Date();
  let hour = don.getHours();

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/ten")
      .then((response) => {
        setUsers(response.data);
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
        <h1 style={{ textAlign: "center" ,color: "#bd7454"}}>Food items list</h1>
        <br />
        <Grid>
          <Grid>
            <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell> Sr No.</TableCell>
                    <TableCell> Type</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Shopname</TableCell>
                    {/* <TableCell>VendorName</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind + 1}</TableCell>
                      <TableCell>{user.type}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        {" "}
                        <StarRating
                          rating={parseFloat(user.rating.toFixed(1))}
                        />
                      </TableCell>
                      <TableCell>{user.price}</TableCell>
                      <TableCell>{user.shopname}</TableCell>
                      {/* <TableCell>{user.vendorname}</TableCell> */}

                      <TableCell>
                        {" "}
                        {(() => {
                          let ewy = parseInt(user.opentime);
                          let ewyuu = parseInt(user.closetime);
                          console.log(ewy);

                          if (
                            hour >= ewy &&
                            hour <= ewyuu &&
                            user.status === "Hide"
                          ) {
                            return (
                              <Button
                                variant="contained"
                                onClick={() => {
                                  localStorage.setItem("O_id", user._id);

                                  navigate("/quantity");
                                }}
                                style={{
                                  backgroundColor: "#ff8521",
                                }}
                              >
                                Order
                              </Button>
                            );
                          } else {
                            return (
                              <Button
                                variant="contained"
                                onClick={() => {
                                  alert("Sorry Restaurant is Closed");
                                }}
                                style={{
                                  backgroundColor: "#e0403a",
                                }}
                              >
                                Unavailable
                              </Button>
                            );
                          }
                        })()}
                      </TableCell>
                       {/* <TableCell>
                        {" "}
                        <Button
                          //#cc835d
                          variant="contained"
                          style={{
                            backgroundColor: "#ff8521",
                          }}
                          onClick={() => {
                            const nUser = {
                              email: localStorage.getItem("uemail"),
                              name: user._id
                            };

                            axios
                              .post("http://localhost:4000/user/far", nUser)
                              .then((response) => {
                                alert("success");
                                console.log(response.data);
                              });
                          }}
                        >
                          AddtoFav
                        </Button>
                       </TableCell>  */}
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

export default Iod;
