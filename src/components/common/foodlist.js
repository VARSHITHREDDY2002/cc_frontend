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
import StarRating from "./StarRating";

const FoodList = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState("Hide");
  const [activePage, setActivePage] = useState("viewf");

  useEffect(() => {
    const heh = {
      email: localStorage.getItem("uemail"),
    };
    axios
      .post("http://localhost:4000/user", heh)
      .then((response) => {
        setUsers(response.data);
        //window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (helo) => {
    localStorage.setItem("vendor_id", helo);

    console.log(localStorage.getItem("vendor_id"));

    navigate("/editingfood");
  };
  const onSubmit1 = (helo) => {
    axios
      .post("http://localhost:4000/user/available", helo)
      .then((response) => {
        setStatus(response.data.status);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbarers activePage={activePage} />
      <br />
      <div className="container">
        <h1 style={{ textAlign: "center" , color: "#bd7454" }}>My Food items list</h1>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind+1}</TableCell>
                      <TableCell>{user.type}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        <StarRating
                          rating={parseFloat(user.rating.toFixed(1))}
                        />
                      </TableCell>
                      <TableCell>{user.price}</TableCell>
                      {/* <TableCell> <Button variant="contained" onClick={() => {
                      const nUser = {
                        id: user._id,

                      };
                    //parseFloat(user.rating.toFixed(1))


                      axios
                        .post("http://localhost:4000/user/delfood", nUser)
                        .then((response) => {
                          alert(response.data);
                          window.location.reload(false);
                          console.log(response.data);
                        });

                       
                    }}>
                      Delete
                    </Button></TableCell> */}
                      <TableCell>
                        <Button
                          variant="contained"
                          onClick={() => {
                            const nUser = {
                              id: user._id,
                            };

                            axios
                              .post("http://localhost:4000/user/delfood", nUser)
                              .then((response) => {
                                alert(response.data);
                                window.location.reload(false);
                                console.log(response.data);
                              });
                          }}
                          style={{
                            backgroundColor: "#e0403a",
                            color: "white",
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>

                      <TableCell>
                        {" "}
                        <Button
                        //f18940
                          style={{
                            backgroundColor:"#ff8521"
                          }}
                          variant="contained"
                          onClick={() => onSubmit(user._id)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Button
                          style={{
                            backgroundColor:"#ff8521"
                          }}
                          variant="contained"
                          onClick={() => onSubmit1(user._id)}
                        >
                          {user.status}
                        </Button>
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
