// src/hooks/queries/useUsersChart.js

import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";

const getUsersChartData = async () => {
  const response = await axiosClient.get("/users", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};

export const useUsersChart = () => {
  return useQuery({
    queryKey: ["dashboard", "users-chart"],
    queryFn: getUsersChartData,
  });
};
