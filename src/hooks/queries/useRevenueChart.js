// src/hooks/queries/useRevenueChart.js

import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";

const getRevenueData = async () => {
  const response = await axiosClient.get("/carts", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};

export const useRevenueChart = () => {
  return useQuery({
    queryKey: ["dashboard", "revenue-chart"],
    queryFn: getRevenueData,
  });
};
