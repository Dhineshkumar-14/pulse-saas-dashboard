import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
