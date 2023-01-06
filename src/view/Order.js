import React from "react";
import "../style/order.scss";
import FavourtiteOrders from "../component/FavourtiteOrders";
import OrderList from "../component/OrderList";
import Sidebar from "../component/Sidebar";
const Order = () => {
  return (
    <div className="order_div">
      <Sidebar pagetitle={"Order List"} />
      <OrderList />
    </div>
  );
};

export default Order;
