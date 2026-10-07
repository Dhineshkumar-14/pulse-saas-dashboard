import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Home />} />

      {/* ================= DASHBOARD ================= */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* /dashboard */}
        <Route index element={<Dashboard />} />

        {/* /dashboard/customers */}
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
