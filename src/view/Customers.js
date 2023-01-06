import React from "react";
import "../style/cusomters.scss";
import CustomerList from "../component/CustomerList";
import Sidebar from "../component/Sidebar";
const Customers = () => {
  return (
    <div className="customer_div">
      <Sidebar pagetitle={"Customers"} />
      <CustomerList />
    </div>
  );
};

export default Customers;
