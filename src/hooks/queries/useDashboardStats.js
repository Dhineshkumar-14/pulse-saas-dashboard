import { useDashboardUsers } from "./useDashboard";
import { useDashboardCarts } from "./useDashboard";

export const useDashboardStats = () => {
  const usersQuery = useDashboardUsers();
  const cartsQuery = useDashboardCarts();

  const users = usersQuery.data?.users ?? [];
  const carts = cartsQuery.data?.carts ?? [];

  const totalUsers = usersQuery.data?.total ?? 0;

  const totalOrders = carts.length;

  const totalRevenue = carts.reduce(
    (total, cart) => total + (cart.discountedTotal || 0),
    0,
  );

  const conversionRate =
    totalUsers > 0 ? ((totalOrders / totalUsers) * 100).toFixed(1) : "0.0";

  return {
    data: {
      revenue: totalRevenue,
      users: totalUsers,
      orders: totalOrders,
      conversion: `${conversionRate}%`,
    },

    isLoading: usersQuery.isLoading || cartsQuery.isLoading,

    isError: usersQuery.isError || cartsQuery.isError,

    error: usersQuery.error || cartsQuery.error,
  };
};
