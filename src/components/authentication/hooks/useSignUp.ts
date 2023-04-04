import { getClient } from "../../../apollo-client";
import {
  SignUpInput,
  useSignUpMutation,
} from "../../../generated/graphql-types";
import { useCallback } from "react";

const client = getClient();

export const useSignUp = () => {
  const [signUpMutation, { data, error, loading }] = useSignUpMutation({
    client,
  });

  const doSignUp = useCallback(
    (input: SignUpInput) => {
      signUpMutation({
        variables: {
          input,
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
    [signUpMutation]
  );

  return { doSignUp, data, error, loading };
};
