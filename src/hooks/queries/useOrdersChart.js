import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";

const getOrdersChartData = async () => {
  const response = await axiosClient.get("/carts", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};

export const useOrdersChart = () => {
  return useQuery({
    queryKey: ["dashboard", "orders-chart"],
    queryFn: getOrdersChartData,
  });
};
