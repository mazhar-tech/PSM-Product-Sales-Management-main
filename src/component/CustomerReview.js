import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import MessageIcon from "@mui/icons-material/Message";
import AttachmentIcon from "@mui/icons-material/Attachment";
import User from "../assets/images/user.jfif";
import GirlUser from "../assets/images/girl_user.jfif";
import '../style/info.scss'

const feedback = [
  {
    cusotmer_pic: User,
    cusotmer_name: "John Doe",
    cusotmer_food: "Grilled Sandwich",
    order_data: "February 24, 2022",
    customer_rating: 3,
    cusotmer_feedback:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    customer_message: 16,
    cusotmer_pin: 3,
  },
  {
    cusotmer_pic: GirlUser,
    cusotmer_name: "Leena dora",
    cusotmer_food: "Italian Pizza",
    order_data: "February 25, 2022",
    customer_rating: 5,
    cusotmer_feedback: "Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    customer_message: 53,
    cusotmer_pin: 12,
  },
];

const CustomerReview = () => {
  const [value, setValue] = useState(2);
  return (
    <div>
      {feedback.map((item) => {
        return (
          <Stack
            direction="row"
            spacing={2}
            key={item.customer_message}
            style={{
              background: "#ffff",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: '10px'
            }}
          >
            <Avatar
            className="user_avatar"
              alt="Remy Sharp"
              src={item.cusotmer_pic}
              // sx={{ width: 44, height: 44 }}
            />
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ marginRight: "35px" }}
                  >
                    {item.cusotmer_name}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ color: "#ca2129" }}
                  >
                    {item.cusotmer_food}
                  </Typography>
                </span>
                <Rating
                  name="read-only"
                  value={item.customer_rating}
                  readOnly
                />
              </div>
              <div style={{ display: "flex" }}>
                <InsertInvitationIcon />
                <Typography variant="body1" gutterBottom component="div">
                  {item.order_data}
                </Typography>
              </div>
              <Typography variant="body1" gutterBottom component="div">
                {item.cusotmer_feedback}
              </Typography>
              <div style={{ display: "flex" }}>
                <span style={{ display: "flex", marginRight: "50px" }}>
                  <MessageIcon />
                  <Typography variant="body1" gutterBottom component="div">
                    {item.customer_message}
                  </Typography>
                </span>
                <span style={{ display: "flex" }}>
                  <AttachmentIcon />
                  <Typography variant="body1" gutterBottom component="div">
                    {item.cusotmer_pin}
                  </Typography>
                </span>
              </div>
            </div>
          </Stack>
        );
      })}
    </div>
  );
};

export default CustomerReview;
