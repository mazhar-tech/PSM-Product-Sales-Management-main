import React from "react";
import "../style/dashboard.scss";
import Chart from "../component/charts/UserChart";
import Grid from "@mui/material/Grid";
import DailyeSale from "../component/charts/DailyeSale";
import TotalOrder from "../component/charts/TotalOrder";
import OrderTable from "../component/OrderTable";
import RecentOrder from "../component/RecentOrder";
import MonthlyRevenue from "../component/MonthlyRevenue";
import OrderList from '../component/OrderList'

const Dashboard = () => {
  return (
    <div className="dashboard_div">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Chart />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DailyeSale />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <TotalOrder />
        </Grid>
      </Grid>
      
      <div style={{ marginTop: "35px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <RecentOrder />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <MonthlyRevenue />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard_table">
        <OrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
