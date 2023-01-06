import React from "react";
import "../../style/menu.scss";
import AdminCategories from "../../component/AdminComponent/AdminCategories";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdminSidebar from "../../component/AdminComponent/AdminSidebar";

const AdminProducts = () => {
  return (
    <div className="menu_div">
      <AdminSidebar pagetitle={"Products"} />
      <AdminCategories />
    </div>
  );
};

export default AdminProducts;
