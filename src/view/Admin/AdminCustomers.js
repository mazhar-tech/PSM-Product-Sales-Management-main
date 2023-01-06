import React from "react";
import "../../style/cusomters.scss";
import AdminSidebar from "../../component/AdminComponent/AdminSidebar";
import A_CustomerList from "../../component/AdminComponent/A_CustomerList";
const AdminCustomers = () => {
  return (
    <div className="customer_div">
      <AdminSidebar pagetitle={"Customer"} />
      <A_CustomerList />
    </div>
  );
};

export default AdminCustomers;
