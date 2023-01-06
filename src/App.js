import React from "react";
import { Routes, Route } from "react-router-dom";
import { route } from "./routes";

// user
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";
import Products from "./view/Products";
import Customers from "./view/Customers";
import Order from "./view/Order";
import Info from "./view/Info";
import Login from "./component/Login";

// Admin
import AdminOrder from "./view/Admin/AdminOrders";
import AdminProducts from "./view/Admin/AdminProducts";
import AdminSignUpPage from "./view/Admin/AdminSignup";
import AdminLoginPage from "./view/Admin/AdminLogin";
import Signup from "./component/Signup";
import AdminCustomers from "./view/Admin/AdminCustomers";

function App() {
  return (
    <div>
      <Routes>
        {/* ADMIN */}

        <Route path={route.Admin} element={<AdminLoginPage />} />
        <Route path={route.AdminSignin} element={<AdminLoginPage />} />
        <Route path={route.AdminSignup} element={<AdminSignUpPage />} />
        <Route path={route.AdminProducts} element={<AdminProducts />} />
        <Route path={route.AdminOrder} element={<AdminOrder />} />
        <Route path={route.AdminCustomers} element={<AdminCustomers />} />

        {/* USER */}
        <Route path={route.Main} element={<Login />} />
        <Route path={route.Login} element={<Login />} />
        <Route path={route.Signup} element={<Signup />} />
        <Route path={route.products} element={<Products />} />
        <Route path={route.customers} element={<Customers />} />
        <Route path={route.order} element={<Order />} />
        <Route path={route.info} element={<Info />} />

        {/* <Route path="/admin/home" element={<Home />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/menu/categories" element={<Menu />} />
        <Route path="/menu/list" element={<MenuList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
