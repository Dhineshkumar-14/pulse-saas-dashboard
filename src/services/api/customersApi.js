import axiosClient from "../axiosClient";

export const getCustomers = async ({
  limit = 10,
  skip = 0,
} = {}) => {
  const response = await axiosClient.get("/users", {
    params: {
      limit,
      skip,
    },
  });

  return response.data;
};