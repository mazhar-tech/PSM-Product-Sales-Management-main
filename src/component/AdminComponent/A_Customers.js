import React from "react";
import "../../style/cusomters.scss";
import AdminSidebar from "./AdminSidebar";
import A_CustomerList from "./A_CustomerList";
const A_Customers = () => {
  return (
    <div className="customer_div">
      <AdminSidebar pagetitle={"Customers"} />
      <A_CustomerList />
    </div>
  );
};

export default A_Customers;
