import { getClient } from "../../../apollo-client";
import {
  AddRestaurantInput,
  useAddRestaurantMutation,
} from "../../../generated/graphql-types";
import { useCallback } from "react";

const client = getClient();

export const useAddRestaurant = () => {
  const [addRestaurantMutation, { data, error, loading }] =
    useAddRestaurantMutation({
      client,
    });

  const addRestaurant = useCallback(
    (input: AddRestaurantInput, userId: string) => {
      addRestaurantMutation({
        variables: {
          input,
          userId,
        },
      })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [addRestaurantMutation]
  );

  return { addRestaurant, error, loading };
};
