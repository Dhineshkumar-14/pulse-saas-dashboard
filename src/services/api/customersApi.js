import axiosClient from "../axiosClient";

export const getCustomers = async ({
  limit = 10,
  skip = 0,
  search = "",
  hairColor = "all",
  sortBy = "default",
} = {}) => {
  let url = "/users";

  // Search
  if (search.trim()) {
    url = "/users/search";
  }

  const params = {
    limit,
    skip,
  };

  // Search query
  if (search.trim()) {
    params.q = search.trim();
  }

  // Hair color filter
  if (hairColor !== "all") {
    url = "/users/filter";

    params.key = "hair.color";
    params.value = hairColor;
  }

  // Sorting
  if (sortBy === "name-asc") {
    params.sortBy = "firstName";
    params.order = "asc";
  }

  if (sortBy === "name-desc") {
    params.sortBy = "firstName";
    params.order = "desc";
  }

  if (sortBy === "age-asc") {
    params.sortBy = "age";
    params.order = "asc";
  }

  if (sortBy === "age-desc") {
    params.sortBy = "age";
    params.order = "desc";
  }

  const response = await axiosClient.get(url, {
    params,
  });

  return response.data;
};
