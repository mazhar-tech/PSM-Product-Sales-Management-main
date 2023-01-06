import * as React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Link,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";

import { Routes, Route, useNavigate } from "react-router-dom";
import "../../style/login.scss";
import _Login from "../../assets/images/Logo.png";
import { COLORS } from "../../assets/color";
import { STYLES } from "../../style/styles_mui";
import { route } from "../../routes";

const theme = createTheme();

const AdminSignUp = () => {
  const navigate = useNavigate();

  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gander, setGender] = useState("");
  const [date, setDate] = useState("");

  const showError = (err) => {
    toast.error(err, {
      position: "top-center",
    });
  };

  const checkValidation = () => {
    if (email === "") {
      showError("Email field is requred");
    } else if (!email.includes("@")) {
      showError("plz enter valid email addres");
    } else if (password === "") {
      showError("password field is required");
    } else if (password.length < 5) {
      showError("password length greater five");
    }
  };
  function Post() {
    const user = {
      name: fullname,
      email: email,
      password: password,
      phone: "03246981198"
    };

    // user.user_name = document.getElementById("naam").value;
    // user.email = document.getElementById("email").value;

    localStorage.setItem("users", JSON.stringify(user));
    console.log(user);

    fetch("http://localhost:4000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((info) => {
        console.log("Response from server" , info);
      });
  }

  return (
    <>
      <div className="background_image">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="right_column">
              <div className="login_text">
                <Typography variant="h4">ADMIN SIGN-UP</Typography>
              </div>

              <FormControl sx={{ m: 3 }} fullWidth variant="standard">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      sx={STYLES.inputstyle}
                      required
                      fullWidth
                      id="fullName"
                      label="FullName"
                      name="fulltName"
                      autoComplete="family-name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={STYLES.inputstyle}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={STYLES.inputstyle}
                      required
                      fullWidth
                      id="Number"
                      label="Phone Number"
                      name="Number"
                      autoComplete="Phone Number"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={STYLES.inputstyle}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      //   placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={STYLES.inputstyle}
                      required
                      fullWidth
                      id="date"
                      type="date"
                      defaultValue="2022-12-17"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {/* <Grid item xs={12}
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
                </Grid>

                {/* <Link to="/home"> */}
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    Post()
                  }}
                  // onClick={() => {
                  //   console.log("eeeeeeeeeeeeeeeerrr");
                  //   toast.error("error", {
                  //     position: "top-center",
                  //   });
                  // }}
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  SIGN UP
                </Button>
              </FormControl>
              <Grid container justifyContent="flex-end">
                <Grid item style={{ marginVertical: 10 }}>
                  <Link
                    href={route.AdminSignin}
                    variant="body2"
                    color={COLORS.primarySharp}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={0} md={6}>
            <div className="left_column">
              <img className="node_image" src={_Login} alt="Node Png Images" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AdminSignUp;
