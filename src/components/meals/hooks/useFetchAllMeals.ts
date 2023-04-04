import { getClient } from "../../../apollo-client";
import { useFetchAllMealsQuery } from "../../../generated/graphql-types";

const client = getClient();

export const useFetchAllMeals = () => {
  const { data, error, loading } = useFetchAllMealsQuery({
    client,
  });

  return { meals: data?.fetchAllMeals, error, loading };
};
