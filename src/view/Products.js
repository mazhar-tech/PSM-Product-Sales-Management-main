import React from "react";
import "../style/menu.scss";
import Categories, { categoryList } from "../component/Categories";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Sidebar from "../component/Sidebar";

const Products = () => {
  return (
    <div className="menu_div">
      <Sidebar pagetitle={"Products"} />
      <Categories />
    </div>
  );
};

export default Products;
