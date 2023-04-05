import { getClient } from "../../../apollo-client";
import { useFetchAllRestaurantsQuery } from "../../../generated/graphql-types";
import { Meal, Restaurant } from "../../../utils/types";

const client = getClient();

const useFetchAllRestaurants = () => {
  const { data, error, loading } = useFetchAllRestaurantsQuery({
    client,
  });

  return {
    restaurants: data?.fetchAllRestaurants.map(
      (restaurant) => restaurant as Restaurant
    ),
    error,
    loading,
  };
};

export default useFetchAllRestaurants;
