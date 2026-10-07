import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/api/customersApi";


export const useCustomers = ({ limit = 10, skip = 0 } = {}) => {
  return useQuery({
    queryKey: ["customers", { limit, skip }],
    queryFn: () => getCustomers({ limit, skip }),
  });
};
