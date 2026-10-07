import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Customers = lazy(() => import("../pages/Customers"));

const RouteLoader = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="flex items-center gap-3 text-sm text-text-muted">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary" />
        Loading...
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Home />} />

      {/* ================= DASHBOARD ================= */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<RouteLoader />}>
              <Dashboard />
            </Suspense>
          }
        />

        <Route
          path="customers"
          element={
            <Suspense fallback={<RouteLoader />}>
              <Customers />
            </Suspense>
          }
        />
      </Route>

      {/* ================= 404 ================= */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
