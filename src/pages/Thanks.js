import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PORTRAITLOGO from "./../images/portrait_logo.png";
import WOO from "./../images/wow_logo.png";
import LOGO from "./../images/logo.png";
import CHECKIMAGE from "./../images/checked.svg";
import "./../styles/App.css";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";
import { spacing } from "@material-ui/system";

const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "200px",
    // margin: '-100px 0 0',/
  },
  image1: {
    height: "140px",
    marginTop: "30px",
    width: "450px",
    // margin: '-100px 0 0',/
  },
  checkedImage: {
    width: "40px",
  },
  typographyDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    paddingLeft: 20,
    margin: "20px 0",
    color: "#006864",
  },
  margin_auto_left: {
    marginLeft: "auto",
  },
  margin_auto_right: {
    marginRight: "auto",
  },
  admit_and_student_card: {
    border: "2px solid #000",
    width: "95%",
    height: "300px",
    margin: "20px auto",
    borderRadius: "10px",
  },
}));

const Thanks = ({ name }) => {
  const classes = useStyles();
  const location = useLocation();
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    console.log(location.state.detail);
    setAlldata(location.state.detail);
  }, [location]);

  return (
    <Box className={classes.root}>
      <Container ref={ref}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <img
                src={PORTRAITLOGO}
                alt="Portrait"
                className={classes.image}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <img src={WOO} alt="Portrait" className={classes.image1} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <Typography
                variant="h4"
                align="inherit"
                style={{
                  color: "#fff",
                  backgroundColor: "#006737",
                  padding: "10px 0px",
                  width: "100%",
                }}
              >
                Registration Foam{" "}
              </Typography>

              {/* <h1 style={{ color: "#fff", backgroundColor: "#006737", padding: "10px 0px", width: "100%" }}>Registration Foam</h1> */}
            </Grid>
          </Grid>
          <Grid
            container
            style={{ border: "2px solid grey", padding: "0px 90px 30px 90px" }}
          >
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid #006864",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    padding: "15px 0 0",
                    fontWeight: "bold",
                  }}
                >
                  Name{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                    padding: "15px 0 0",
                  }}
                >
                  {alldata.fullname}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    fontWeight: "bold",

                    textAlign: "left",
                  }}
                >
                  Father's Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.fathername}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Email Address{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.email}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Date of Birth{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.date}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Address
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.address}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Gender
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.gend}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Phone Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Parents / Guardian Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.guardianno}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Qualification{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.qualif}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Availability Timing
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.time}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item sm={6} xm={12}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Course Name
                </Typography>
              </Grid>
              <Grid item sm={6} xm={12}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.cou}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  CNIC Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.cnic}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                color: "#006737",
                borderBottom: "1px solid",
                padding: 10,
                margin: "10px 0px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 auto",
                    width: "300px",
                    fontWeight: "bold",

                    textAlign: "left",
                  }}
                >
                  Batch{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  align="inherit"
                  style={{
                    margin: "0 80px",
                    width: "500px",
                    textAlign: "left",
                  }}
                >
                  {alldata.bat}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                padding: 10,
                fontSize: "bold",
                color: "#006737",
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              <Grid item sm={12}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  align="left"
                  variant="h5"
                >
                  RULES & REGULATIONS
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{ color: "black", fontSize: "bold" }}>
              <Grid item sm={12}>
                <ol
                  style={{
                    color: "grey",
                    padding: 10,
                    padding: " 0px",
                    fontSize: "bold",
                    textAlign: "start",
                    fontSize: "35px",
                    margin: "25px 0px",
                    marginLeft: 15,
                  }}
                >
                  <Typography component="li">
                    I hereby accept the responsibilities of the good conduct and
                    guarantee that I will not be involved in any other activity,
                    political or ethic, but learning during my stay in the
                    program
                  </Typography>{" "}
                  <br></br>
                  <Typography component="li">
                    I hereby, solemnly declare the data and facts mentioned here
                    in are true and correct to the best of my knowledge.
                    Further, I will abide by my all the establish and policies
                    of Jawan Pakistan.
                  </Typography>
                </ol>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                xs={12}
                sm={8}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                  className={`${classes.admit_and_student_card} ${classes.margin_auto_left}`}
                >
                  <h2
                    style={{
                      margin: "10px 0",
                      fontFamily: "Roboto",
                      color: "grey",
                      textDecoration: "underline",
                    }}
                  >
                    ID Card
                  </h2>
                  <Box
                    style={{
                      display: "flex",
                      margin: "-5px 15px 0",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ flexGrow: 3, padding: "10px", margin: "0 25px" }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "10px 0px 0px 0px ",
                        }}
                      >
                        <Box style={{ flexGrow: 1 }}>
                          <Typography variant="h6" align="left" align="left">
                            {" "}
                            Name :
                          </Typography>
                        </Box>
                        <Box style={{ flexGrow: 3 }}>
                          <Typography
                            variant="p"
                            align="center"
                            style={{ fontSize: 23, fontFamily: "roboto" }}
                          >
                            {" "}
                            {alldata.fullname}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "10px 0px 0px 0px",
                        }}
                      >
                        <Box style={{ flexGrow: 1 }}>
                          <Typography variant="h6" align="left">
                            {" "}
                            Roll Number :
                          </Typography>
                        </Box>
                        <Box style={{ flexGrow: 3 }}>
                          <Typography
                            variant="p"
                            style={{ fontSize: 23, fontFamily: "roboto" }}
                            align="center"
                          >
                            7836/43{" "}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "10px 0px 0px 0px",
                        }}
                      >
                        <Box style={{ flexGrow: 1 }}>
                          <Typography variant="h6" align="left">
                            {" "}
                            Father Name :
                          </Typography>
                        </Box>
                        <Box style={{ flexGrow: 3 }}>
                          <Typography
                            variant="p"
                            style={{ fontSize: 23, fontFamily: "roboto" }}
                            align="center"
                          >
                            {" "}
                            {alldata.fathername}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "10px 0px 0px 0px",
                        }}
                      >
                        <Box style={{ flexGrow: 1 }}>
                          <Typography variant="h6" align="left">
                            {" "}
                            Course Name :
                          </Typography>
                        </Box>
                        <Box style={{ flexGrow: 3 }}>
                          <Typography
                            variant="p"
                            style={{ fontSize: 23, fontFamily: "roboto" }}
                            align="center"
                          >
                            {alldata.cou}{" "}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "10px 0px 0px 0px",
                        }}
                      >
                        <Box style={{ flexGrow: 1 }}>
                          <Typography variant="h6" align="left">
                            {" "}
                            Signature :
                          </Typography>
                        </Box>
                        <Box style={{ flexGrow: 3 }}>
                          <Typography
                            variant="p"
                            style={{ fontSize: 23, fontFamily: "roboto" }}
                            align="center"
                          >
                            {" "}
                            None
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                    <div
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        style={{
                          border: "1px solid #000",
                          height: "191.99px",
                          width: "161.99px",
                        }}
                      ></Box>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <div
              style={{
                borderBottom: "2px dashed black",
                width: "100%",
                height: 0,
                marginTop: 60,
                marginBottom: 60,
              }}
            ></div>
            <div style={{ marginTop: 20 }}>
              <Grid container>
                <Grid
                  xs={12}
                  sm={12}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h5" style={{ opacity: 0 }}>
                    {" "}
                    RECIPT SLIP{" "}
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    {" "}
                    RECIPT SLIP{" "}
                  </Typography>
                  <Typography variant="h6" style={{ fontWeight: "normal" }}>
                    FORM NO
                    <span style={{ margin: "0 10px" }}>
                      <input type="text" />
                    </span>
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "20px 0px",
                  }}
                >
                  <Box
                    style={{ flexGrow: 1, margin: "20px 0", display: "flex" }}
                  >
                    <label style={{ width: "20%" }}>
                      {" "}
                      <Typography
                        variant="h5"
                        style={{ marginTop: "10px", fontSize: 21 }}
                      >
                        Name{" "}
                      </Typography>{" "}
                    </label>{" "}
                    <Typography
                      style={{
                        width: "70%",
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                    </Typography>
                  </Box>
                  <Box
                    style={{ flexGrow: 1, margin: "20px 0", display: "flex" }}
                  >
                    <label style={{ width: "30%" }}>
                      {" "}
                      <Typography
                        variant="h5"
                        style={{ marginTop: "10px", fontSize: 21 }}
                      >
                        Course Name{" "}
                      </Typography>{" "}
                    </label>{" "}
                    <Typography
                      style={{
                        width: "70%",
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box
                    style={{ flexGrow: 1, margin: "20px 0", display: "flex" }}
                  >
                    <label style={{ width: "30%" }}>
                      {" "}
                      <Typography
                        variant="h5"
                        style={{ marginTop: "10px", fontSize: 21 }}
                      >
                        Amount{" "}
                      </Typography>{" "}
                    </label>{" "}
                    <Typography
                      style={{
                        width: "65%",
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                    </Typography>
                  </Box>
                  <Box
                    style={{ flexGrow: 1, margin: "20px 0", display: "flex" }}
                  >
                    <label style={{ width: "20%" }}>
                      {" "}
                      <Typography
                        variant="h5"
                        style={{ marginTop: "10px", fontSize: 21 }}
                      >
                        Date{" "}
                      </Typography>{" "}
                    </label>{" "}
                    <Typography
                      style={{
                        width: "70%",
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                    </Typography>
                  </Box>
                  <Box
                    style={{ flexGrow: 1, margin: "20px 0", display: "flex" }}
                  >
                    <label style={{ width: "45%" }}>
                      {" "}
                      <Typography
                        variant="h5"
                        style={{ marginTop: "10px", fontSize: 21 }}
                      >
                        Stamp / Signature{" "}
                      </Typography>{" "}
                    </label>{" "}
                    <Typography
                      style={{
                        width: "55%",
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Container>
        <Container>
          {/* <Grid container >
            <Grid xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
              <Box style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'center' }} className={`${classes.admit_and_student_card} ${classes.margin_auto_left}`}>
                <h2 style={{ margin: '10px 0', fontFamily: 'Roboto', color: 'grey' }}>ID Card</h2>
                <Box style={{ display: "flex", margin: '15px', height: '75%' }}>
                  <div style={{ flexGrow: 3, padding: "10px" }}>
                    <Box style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px 0px 0px " }} >
                      <Box style={{ flexGrow: 1 }}>
                        <Typography variant="h6" align="left"> Name :</Typography>
                      </Box>
                      <Box style={{ flexGrow: 3 }}>
                        <Typography variant="h6" align="left"> {alldata.fullname}</Typography>
                      </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px 0px 0px" }} >
                      <Box style={{ flexGrow: 1 }}>
                        <Typography variant="h6"> Roll Number :</Typography>
                      </Box>
                      <Box style={{ flexGrow: 3 }}>
                        <Typography variant="h6">7836/43 </Typography>
                      </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px 0px 0px" }} >
                      <Box style={{ flexGrow: 1 }}>
                        <Typography variant="h6"> Father Name :</Typography>
                      </Box>
                      <Box style={{ flexGrow: 3 }}>
                        <Typography variant="h6"> {alldata.fathername}</Typography>
                      </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px 0px 0px" }} >
                      <Box style={{ flexGrow: 1 }}>
                        <Typography variant="h6"> Course Name :</Typography>
                      </Box>
                      <Box style={{ flexGrow: 3 }}>
                        <Typography variant="h6">{alldata.cou} </Typography>
                      </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px 0px 0px" }} >
                      <Box style={{ flexGrow: 1 }}>
                        <Typography variant="h6"> Signature :</Typography>
                      </Box>
                      <Box style={{ flexGrow: 3 }}>
                        <Typography variant="h6" > None</Typography>
                      </Box>
                    </Box>
                    <Box>

                    </Box>
                  </div>
                  <div style={{ flexGrow: 1, padding: "10px 0px 0px 0px" }}>
                  </div>
                </Box>

              </Box>
            </Grid>
          </Grid> */}
        </Container>
      </Container>
      <Container>
        <Grid item sm={12}>
          <Pdf targetRef={ref} filename="post.pdf" x={1} y={1} scale={0.6}>
            {({ toPdf }) => (
              <button
                style={{
                  width: 150,
                  height: 40,
                  backgroundColor: "#006737",
                  color: "white",
                  padding: "10px 0px",
                  margin: 20,
                }}
                onClick={toPdf}
              >
                Download Card
              </button>
            )}
          </Pdf>
        </Grid>
      </Container>
    </Box>
  );
};

export default Thanks;

// import React from 'react'
// import Pdf from "react-to-pdf"

// const ref = React.createRef();
// const PDF = (props) => {
//   return (
//     <>
//       <div className="Post" ref={ref}>
//         <h1>{props.title}</h1>
//         <img src={props.image} alt={props.title} />
//         <p>{props.content}</p>
//       </div>
//       <Pdf targetRef={ref} filename="post.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
//       </Pdf>
//     </>
//   );
// }

// export default PDF;
