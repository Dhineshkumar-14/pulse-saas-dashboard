import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/api/customersApi";

export const useCustomers = ({
  limit = 10,
  skip = 0,
  search = "",
  hairColor = "all",
  sortBy = "default",
} = {}) => {
  return useQuery({
    queryKey: [
      "customers",
      {
        limit,
        skip,
        search,
        hairColor,
        sortBy,
      },
    ],

    queryFn: () =>
      getCustomers({
        limit,
        skip,
        search,
        hairColor,
        sortBy,
      }),
  });
};
