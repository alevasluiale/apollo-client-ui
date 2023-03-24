import { getClient } from "../../apollo-client";
import { SignInInput, useSignInMutation } from "../../generated/graphql-types";
import { useCallback } from "react";

const client = getClient();

export const useSignIn = () => {
  const [signInMutation, { data, error, loading }] = useSignInMutation({
    client,
  });

  const doSignIn = useCallback(
    (input: SignInInput) => {
      signInMutation({
        variables: {
          input,
        },
      })
        .then((response) => response)
        .catch((err) => {
          console.log(err);
        });
    },
    [signInMutation]
  );

  return { doSignIn, data, error, loading };
};
