import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { colors } from "@mui/material";
import { COLORS } from "../../assets/color";

const AddStaff = () => {
  const [_image, set_Image] = useState("");
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
          label="Product"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Typography variant="body1" component="div" gutterBottom>
          Discription
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Discription"
          variant="outlined"
          fullWidth
          size="small"
        />
        <div style={{ display: "flex", marginTop: "15px" }}>
          <div style={{ marginRight: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Price
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="1000"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
          <div style={{ marginLeft: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Stock
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="130"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
        </div>

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

export default AddStaff;
