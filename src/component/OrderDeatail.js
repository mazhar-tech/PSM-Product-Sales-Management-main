import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Pizza from "../assets/images/burger.jpg";
import Burger from "../assets/images/pizza.jpg";
import Noodle from "../assets/images/noodles.jfif";
import '../style/order.scss';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';

const images = [{ url: Pizza }, { url: Burger }, { url: Noodle }];

const OrderDeatail = () => {
  return (
    <div>
    <div className="slider_image">
      <SimpleImageSlider width={486} height={200} images={images} showNavs={true} slideDuration={0.5} />
    </div>
    <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
       <strong>Order ID:</strong> 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <storn>10</storn>
      </Typography>
      </span>
      <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Order Name:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        French Fries
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
       <strong>Customer Name:</strong> 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Jhon Leo
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Location:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Islambad Pakistan
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Order Status:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Pending
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Delivered Time:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        10:06
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Product Price:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        $40
      </Typography>
      </span>
       <Divider />
       {/* <span style={{display:'flex', justifyContent: 'space-between'}}> */}
       {/* <Stack direction="row" spacing={2}> */}
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Product Description:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book.
      </Typography>
       {/* </Stack> */}
      {/* </span> */}
      
      
    </div>
  );
};

export default OrderDeatail;
