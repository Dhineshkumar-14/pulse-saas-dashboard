import axiosClient from "../axiosClient";

export const getDashboardUsers = async () => {
  const response = await axiosClient.get("/users", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};

export const getDashboardCarts = async () => {
  const response = await axiosClient.get("/carts", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};
