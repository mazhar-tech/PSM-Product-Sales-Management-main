import React from "react";
import "../../style/order.scss";
import FavourtiteOrders from "../../component/FavourtiteOrders";
import AdminSidebar from "../../component/AdminComponent/AdminSidebar";
import A_OrderList from "../../component/AdminComponent/A_OrderList";

const AdminOrder = () => {
  return (
    <div className="order_div">
      <AdminSidebar pagetitle={"Order List"} />
      <A_OrderList />
    </div>
  );
};

export default AdminOrder;
