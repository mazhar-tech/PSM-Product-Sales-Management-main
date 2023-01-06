import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { COLORS } from "../assets/color";

const AddCustomer = () => {
  const [_image, set_Image] = useState("");
  const [age, setAge] = useState("");
  const [currency, setCurrency] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const currencyHandler = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
        Add Product Form
      </Typography>
      <Divider />
      <div style={{ padding: "8px" }}>
        <Typography variant="body1" component="div" gutterBottom>
          Product Name
        </Typography>
        <TextField
          id="outlined-basic"
          label="Pizza"
          variant="outlined"
          fullWidth
          size="small"
        />

        <div style={{ display: "flex", marginTop: "15px" }}>
          <div style={{ marginRight: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Select Category
            </Typography>
            <Select
              sx={{ width: 202 }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
            >
              <MenuItem value="">Category 1</MenuItem>
              <MenuItem value={10}>Category 2</MenuItem>
              <MenuItem value={20}>Category 3</MenuItem>
              <MenuItem value={30}>Category 4</MenuItem>
              <MenuItem value={40}>Category 5</MenuItem>
            </Select>
          </div>
          <div style={{ marginLeft: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Currency
            </Typography>
            <Select
              sx={{ width: 202 }}
              value={currency}
              onChange={currencyHandler}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
            >
              <MenuItem value="">USD</MenuItem>
              <MenuItem value={20}>Bitcoin</MenuItem>
              <MenuItem value={30}>Euro</MenuItem>
              <MenuItem value={40}>PKR</MenuItem>
            </Select>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <div style={{ marginRight: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Quantity
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="01"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
          <div style={{ marginLeft: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Price
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="$10"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Typography variant="body1" component="div" gutterBottom>
            Product Description
          </Typography>
          <TextField
            id="standard-multiline-static"
            placeholder="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
          <div className="food_image">
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <input
                  type="file"
                  onChange={(e) => {
                    const selectImage = e.target.files[0];
                    set_Image(URL.createObjectURL(selectImage));
                  }}
                  name="image"
                  id="input"
                  accept="image/*"
                />
              </Grid>
              <Grid item xs={7} style={{ textAlign: "center" }}>
                <img src={_image} style={{ width: "100px" }} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        style={{
          float: "right",
          margin: "7px",
          color: "white",
          backgroundColor: COLORS.primary,
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default AddCustomer;
