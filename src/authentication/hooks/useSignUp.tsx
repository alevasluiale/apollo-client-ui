import { getClient } from "../../apollo-client";
import { SignUpInput, useSignUpMutation } from "../../generated/graphql-types";
import { useCallback } from "react";

const client = getClient();

export const useSignUp = () => {
  const [signUp] = useSignUpMutation({
    client,
  });

  const doSignUp = useCallback(
    async (input: SignUpInput) => {
      console.log(input);
      try {
        return await signUp({
          variables: {
            input,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    [signUp]
  );

  return { doSignUp };
};
