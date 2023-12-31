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
import Navbarers from "../templates/nav2";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const FoodList = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [yg, setyg] = useState(0);
  const [activePage, setActivePage] = useState("aag");
  var hello = 0;

  var val = 1;

  useEffect(() => {
    const heh = {
      email: localStorage.getItem("uemail"),
    };
    axios
      .post("https://cc-backend-n5nv.onrender.com/user/lela", heh)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("https://cc-backend-n5nv.onrender.com/user/lcu", heh)
      .then((response) => {
        setyg(response.data.counter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //     const hehr = {
  //         email: localStorage.getItem("uemail")
  //     }
  //
  // }, []);

  return (
    <>
      <Navbarers activePage={activePage} />

      <br />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#bd7454" }}>
          Current Status of Orders
        </h1>
        <br />
        <Grid>
          <Grid>
            <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell> Sr No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>BuyerEmail</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>OrderTime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind + 1}</TableCell>

                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.bemail}</TableCell>
                      <TableCell>{user.price}</TableCell>
                      <TableCell>{user.quantity}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>{user.ordertime}</TableCell>
                      <TableCell>
                        {(() => {
                          if (
                            user.status != "ReadyforPickup" &&
                            user.status != "Rejected" &&
                            user.status != "completed"
                          ) {
                            return (
                              <Button
                                style={{
                                  backgroundColor: "#ff8521",
                                }}
                                variant="contained"
                                onClick={() => {
                                  const nth = {
                                    id: user._id,
                                  };

                                  axios
                                    .post(
                                      "https://cc-backend-n5nv.onrender.com/user/emphasis",

                                      nth
                                    )
                                    .then((response) => {
                                      // emailjs
                                      // .send(
                                      //   "service_kco8l4i",
                                      //   "template_tddvb9i",
                                      //   {
                                      //     to_mail: email,
                                      //     message: message,
                                      //   },
                                      //   "YBRAgph4SiNcQNH2y"
                                      // )
                                      // .then((response) => {
                                      //   console.log("Email sent successfully!", response);
                                      //   axios
                                      //   .post("https://cc-backend-n5nv.onrender.com/user/passwordupdate", newUser)
                                      //   .then((response) => {
                                      //     // alert("Successfully added");
                                      //     // console.log(response.data);
                                      //     alert(response.data);
                                      //     navigate("/login");

                                      //   });
                                      if (response.data.check === "Accepted") {
                                        // var templateParams = {
                                        //   subject: user.shopname,
                                        //   tomail: "nithil99m2@gmail.com",
                                        //   vendor: user.name,
                                        //   message:
                                        //     "Your order has been Accepted",
                                        // };

                                        // template_ikeuk05
                                        const message =
                                          "Your order has been Accepted";
                                        const email = user.bemail;
                                        emailjs
                                          .send(
                                            "service_kco8l4i",
                                            "template_jasvmbe",
                                            {
                                              to_mail: email,
                                              message: message,
                                            },
                                            "YBRAgph4SiNcQNH2y"
                                          )
                                          .then(
                                            function (response) {
                                              console.log(
                                                "SUCCESS!",
                                                response.status,
                                                response.text
                                              );
                                            },
                                            function (error) {
                                              console.log("FAILED...", error);
                                            }
                                          );
                                      }
                                      if (
                                        response.data.check === "ReadyforPickup"
                                      ) {
                                        // var templateParams = {
                                        //   subject: user.shopname,
                                        //   tomail: "nithil99m2@gmail.com",
                                        //   vendor: user.name,
                                        //   message:
                                        //     "Your order has been Accepted",
                                        // };

                                        // template_ikeuk05
                                        const message =
                                          "Your order has been prepared.Please come and pickup";
                                        const email = user.bemail;
                                        emailjs
                                          .send(
                                            "service_kco8l4i",
                                            "template_jasvmbe",
                                            {
                                              to_mail: email,
                                              message: message,
                                            },
                                            "YBRAgph4SiNcQNH2y"
                                          )
                                          .then(
                                            function (response) {
                                              console.log(
                                                "SUCCESS!",
                                                response.status,
                                                response.text
                                              );
                                            },
                                            function (error) {
                                              console.log("FAILED...", error);
                                            }
                                          );
                                      }
                                      alert(response.data.message);
                                      if (
                                        response.data.message ===
                                        "Moved to next stage"
                                      ) {
                                        window.location.reload(false);
                                        console.log(response.data);
                                      }
                                    });
                                }}
                              >
                                MovetoNextstage
                              </Button>
                            );
                          }
                        })()}
                      </TableCell>
                      <TableCell>
                        {(() => {
                          if (user.status == "Placed") {
                            return (
                              <Button
                                style={{
                                  backgroundColor: "#e0403a",
                                }}
                                variant="contained"
                                onClick={() => {
                                  const message =
                                    "Your order has been Rejected";
                                  const email = user.bemail;
                                  emailjs
                                    .send(
                                      "service_kco8l4i",
                                      "ttemplate_jasvmbe",
                                      {
                                        to_mail: email,
                                        message: message,
                                      },
                                      "YBRAgph4SiNcQNH2y"
                                    )
                                    .then(
                                      function (response) {
                                        console.log(
                                          "SUCCESS!",
                                          response.status,
                                          response.text
                                        );
                                      },
                                      function (error) {
                                        console.log("FAILED...", error);
                                      }
                                    );

                                  const nth = {
                                    id: user._id,
                                  };

                                  axios
                                    .post(
                                      "https://cc-backend-n5nv.onrender.com/user/emphasiser",
                                      nth
                                    )
                                    .then((response) => {
                                      alert(response.data);
                                      window.location.reload(false);
                                      console.log(response.data);
                                    });

                                  var qu = user.quantity;
                                  var pr = user.price;
                                  qu = qu * pr;

                                  const sd = {
                                    email: user.bemail,
                                    addi: qu,
                                  };

                                  axios
                                    .post(
                                      "https://cc-backend-n5nv.onrender.com/user/refund",
                                      sd
                                    )
                                    .then((response) => {
                                      console.log(response.data);
                                    });
                                }}
                              >
                                Reject
                              </Button>
                            );
                          }
                        })()}
                      </TableCell>
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

export default FoodList;
