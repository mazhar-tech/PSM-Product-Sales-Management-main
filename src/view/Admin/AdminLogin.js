import React, { useState } from "react";
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
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../../style/login.scss";
import _Login from "../../assets/images/Logo.png";
import { COLORS } from "../../assets/color";
import { route } from "../../routes";

import { ToastContainer, toast } from "react-toastify";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const loginHandler = () => {
    navigate(route.AdminProducts);
  };

  const signupHandler = () => {
    navigate(route.AdminSignup);
  };

  const showError = (err) => {
    return toast.error(err, {
      position: "top-center",
    });
  };

  const checkValidation = () => {
    const { email, password } = inpval;
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
  return (
    <div className="background_image">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="right_column">
            <div className="login_text">
              <Typography variant="h4">ADMIN LOGIN</Typography>
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
                onClick={() => navigate(route.AdminProducts)}
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
                type="button"
                variant="outlined"
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

export default AdminLoginPage;
