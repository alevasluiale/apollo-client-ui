import { getClient } from "../../../apollo-client";
import { useFetchAllMealsQuery } from "../../../generated/graphql-types";
import { Meal } from "../../../utils/types";

const client = getClient();

export const useFetchAllMeals = () => {
  const { data, error, loading } = useFetchAllMealsQuery({
    client,
  });

  return {
    meals: data?.fetchAllMeals.map((meal) => meal as Meal),
    error,
    loading,
  };
};
