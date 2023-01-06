import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pizza from "../assets/images/pizza.jpg";
import Sandwiches from "../assets/images/sandwich1.jpg";
import Fries from "../assets/images/Fries.jpg";
import Burger from "../assets/images/burger.jpg";
import Grilled from "../assets/images/grilled.jpg";
import Dumplings from "../assets/images/dumplings.jpg";
import "../style/menu.scss";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddProduct from "./AddProduct";
import AddCategory from "./AdminComponent/AddCategory";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { COLORS } from "../assets/color";
import { DoDisturbOn, AddCircle } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid " + COLORS.primary,
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export const categoryList = [
  {
    product_img: Pizza,
    product_name: "Pizza",
    product_price: 15,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Sandwiches,
    product_name: "Sandwiches",
    product_price: 23,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Fries,
    product_name: "Fries",
    product_price: 20,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Burger,
    product_name: "Fries",
    product_price: 80,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Grilled,
    product_name: "Fries",
    product_price: 90,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Dumplings,
    product_name: "Fries",
    product_price: 91,
    totalOrder: 100,
    Revenue: 2000,
  },
];

const Categories = () => {
  const [_open, setOpen] = React.useState(false);
  //    const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleOpen = () => setOpen(true);
  const _handleClose = () => setOpen(false);

  return (
    <div style={{ padding: "0px 20px 20px 20px" }}>
      {/* <Typography variant="h4" gutterBottom component="div">
          Products
        </Typography>
        <Divider /> */}

      <Grid container spacing={6} style={{ marginTop: "15px" }}>
        {categoryList.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} xxl={2}>
              <Card key={item.product_price} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.product_img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="name_price">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.product_name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        {/* <span className="product_price"> */}$
                        {item.product_price}
                        {/* </span> */}
                      </Typography>
                    </div>
                    <div className="name_price">
                      <Typography variant="body1">
                        {/* Revenue: <strong>${item.Revenue}</strong> */}
                        Description Description Description
                      </Typography>
                    </div>
                    <div className="name_price">
                      <Typography variant="body1">
                        <strong>QTy in Stock : {item.Revenue}</strong>
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <span
                    style={{
                      display: "flex",
                      width: 100,
                      paddingHorizontal: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <DoDisturbOn color={COLORS.primarySharp} />
                    <Typography variant="body1">1</Typography>
                    <AddCircle color={COLORS.primarySharp} />
                  </span>
                  <Button
                    onClick={handleClick({
                      vertical: "top",
                      horizontal: "center",
                    })}
                    size="small"
                    fullWidth
                    style={{
                      color: COLORS.white,
                      backgroundColor: COLORS.btnBG,
                    }}
                  >
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Do you want to reject this Order?"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Do you want to Delete this Category?
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              No
            </Button>
          </div>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Categories;
