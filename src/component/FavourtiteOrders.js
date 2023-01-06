import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../style/order.scss";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Grid from "@mui/material/Grid";

const FavourtiteOrders = () => {
  return (
    <div className="order">
      <div className="OrderList">
        <Typography variant="h6" component="div" gutterBottom>
          FAVOURITE ORDERS
        </Typography></div>
      <Divider />
      <Grid container spacing={12} style={{padding:"20px"}} >
        <Grid item xs={12} sm={6} md={4} lg ={3} >
          <Typography variant="h6" component="div" gutterBottom style={{textAlign:'center'}}> Pizza</Typography>
            <div style={{margin:'20px'}}>
                <CircularProgressbar value={49} text={`${49}%`} strokeWidth={5}
           styles={buildStyles({ textColor: "black",pathColor: "#fbbe36", marginLeft:'20px', marginRight:'40px'})}/>
            </div>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg ={3}>
          <Typography variant="h6" component="div" gutterBottom style={{textAlign:'center'}}> Noodles</Typography>
         <div style={{margin:'20px'}}>
          <CircularProgressbar value={22} text={`${22}%`} strokeWidth={5}
          styles={buildStyles({ textColor: "black",pathColor: "#ca2129"})} />
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg ={3}>
          <Typography variant="h6" component="div" gutterBottom style={{textAlign:'center'}}> Spicy Sylad</Typography>
          <div style={{margin:'20px'}}>
               <CircularProgressbar value={87} text={`${87}%`} strokeWidth={5}
          styles={buildStyles({ textColor: "black",pathColor: "green"})} />
          </div>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg ={3}>
          <Typography variant="h6" component="div" gutterBottom style={{textAlign:'center'}}> French Fries</Typography>
          <div style={{margin:'20px'}}>
              <CircularProgressbar value={40} text={`${40}%`} strokeWidth={5} 
              styles={buildStyles({ textColor: "black",pathColor: "#fbbe36"})}
          />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FavourtiteOrders;
