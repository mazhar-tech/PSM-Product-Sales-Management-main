import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import '../style/dashboard.scss'
import Avatar from '@mui/material/Avatar';
import Pizza from '../assets/images/pizza.jpg'
import French from '../assets/images/french.jpg'
import Grid from "@mui/material/Grid";
import Cereal from '../assets/images/cereal.jpg'
import Noodle from '../assets/images/noodles.jfif'
import Sandwich from '../assets/images/sandwich.jfif'
import { Link } from "react-router-dom";

const foodItem = [
    {
        food_image: Pizza,
        food_name:'Pizza',
        food_price: 34.7,
        food_id: 989834
    },
    {
        food_image: French,
        food_name:'Frebcg',
        food_price: 74.7,
        food_id: 988834
    },
    {
        food_image: Cereal,
        food_name:'Cereal',
        food_price: 94.7,
        food_id: 988834
    },
    {
        food_image: Noodle,
        food_name:'Noodle',
        food_price: 7,
        food_id: 988834
    },
    {
        food_image: Sandwich,
        food_name:'Sandwich',
        food_price: 98.7,
        food_id: 988834
    }
]
const RecentOrder = () => {
    return (
      <div
        style={{
          background: "#fff",
          marginBottom: "40px",
          borderRadius: "4px",
        }}
      >
        <div className="order_head">
          <Typography variant="h6" component="div" gutterBottom>
            {" "}
            RECENT ORDERS REQUESTED
          </Typography>

          <Link to="/order">
            <Button
              variant="contained"
              style={{
                float: "right",
                margin: "10px",
                color: "black",
                backgroundColor: "#fbbe36",
              }}
            >
              View All
            </Button>
          </Link>
        </div>
        <Divider />

        <div style={{ padding: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" gutterBottom>
                Food Item
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" component="div" gutterBottom>
                Price
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Product ID
              </Typography>
            </Grid>
          </Grid>
          {foodItem.map((item) => {
            return (
              <div>
                <Divider className="food_detail" />
                <Grid container spacing={2} key={item.food_id}>
                  <Grid item xs={6}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.food_image}
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography variant="body1" component="div" gutterBottom style={{marginLeft:'5px'}}>
                        {item.food_name}
                      </Typography>
                    </span>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body1" component="div" gutterBottom >
                      ${item.food_price}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="body1"
                      component="div"
                      gutterBottom
                      style={{ textAlign: "center" }}
                    >
                      {item.food_id}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default RecentOrder
