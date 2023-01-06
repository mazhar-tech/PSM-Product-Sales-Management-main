import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../style/login.scss";
import _Login from "../assets/images/Logo.png";
import { COLORS } from "../assets/color";
import { route } from "../routes";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const loginHandler = () => {
    // addData();
    navigate(route.products);
  };
  const signupHandler = () => {
    navigate(route.Signup);
  };
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // const getuserArr = JSON.parse(localStorage.getItem("user_data"));
    let getuserArr = "";
    fetch("http://localhost:3001/Users")
      .then((response) => response.json())
      .then((data) => {
        const { email, password } = inpval;
        let database = data;

        if (email === "") {
          toast.error("Email field is requred", {
            position: "top-center",
          });
        } else if (!email.includes("@")) {
          toast.error("plz enter valid email addres", {
            position: "top-center",
          });
        } else if (password === "") {
          toast.error("password field is required", {
            position: "top-center",
          });
        } else if (password.length < 5) {
          toast.error("password length greater five", {
            position: "top-center",
          });
        } else {
          const user = database.find(
            (data) => data.email === email && data.password === password
          );

          if (user) {
            toast.success("Welcome " + user.name);
            localStorage.setItem("user_login", JSON.stringify(user));
            localStorage.setItem("islogin", true);
            navigate("/products");
          } else {
            toast.error("invalid details");
          }
        }
      });
  };

  return (
    <div className="background_image">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="right_column">
            <div className="login_text">
              <Typography variant="h2"> Login</Typography>
            </div>

            <FormControl sx={{ m: 3 }} fullWidth variant="standard">
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Email"
                placeholder="Email Address"
                // onChange={emailHandler}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                placeholder="Password"
                // onChange={passwordHandler}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              {/* <Link to="/home"> */}
              <Button
                type="submit"
                variant="contained"
                onClick={loginHandler}
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Sign In
              </Button>
              {/* </Link> */}
              <div style={{ margin: 10, alignSelf: "center" }}>
                <Typography
                  variant="body2"
                  style={{ marginVertical: 10, justifyContent: "center" }}
                >
                  Don't have an account?
                </Typography>
              </div>
              <Button
                type="submit"
                variant="contained"
                onClick={signupHandler}
                style={{ background: COLORS.primaryRGB, color: COLORS.white }}
              >
                SIGN UP
              </Button>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={0} md={6}>
          <div className="left_column">
            <img className="node_image" src={_Login} alt="Node Png Images" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
