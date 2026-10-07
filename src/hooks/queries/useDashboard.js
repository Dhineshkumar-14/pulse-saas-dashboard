import { useQuery } from "@tanstack/react-query";

import {
  getDashboardUsers,
  getDashboardCarts,
} from "../../services/api/dashboardApi";

export const useDashboardUsers = () => {
  return useQuery({
    queryKey: ["dashboard", "users"],
    queryFn: getDashboardUsers,
  });
};

export const useDashboardCarts = () => {
  return useQuery({
    queryKey: ["dashboard", "carts"],
    queryFn: getDashboardCarts,
  });
};
