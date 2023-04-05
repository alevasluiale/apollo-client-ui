/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddRestaurantInput = {
  description: Scalars["String"];
  mealsIds: Array<InputMaybe<Scalars["ID"]>>;
  name: Scalars["String"];
};

export type Meal = {
  __typename?: "Meal";
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  price: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  addRestaurant: Scalars["String"];
  signIn: SignInPayload;
  signUp: Scalars["String"];
};

export type MutationAddRestaurantArgs = {
  input?: InputMaybe<AddRestaurantInput>;
  userId: Scalars["ID"];
};

export type MutationSignInArgs = {
  input?: InputMaybe<SignInInput>;
};

export type MutationSignUpArgs = {
  input?: InputMaybe<SignUpInput>;
};

export type Query = {
  __typename?: "Query";
  fetchAllMeals: Array<Meal>;
  fetchAllRestaurants: Array<Maybe<Restaurant>>;
  test: Scalars["Boolean"];
};

export type QueryTestArgs = {
  test?: InputMaybe<Scalars["String"]>;
};

export type Restaurant = {
  __typename?: "Restaurant";
  description: Scalars["String"];
  id: Scalars["ID"];
  meals: Array<Maybe<Meal>>;
  name: Scalars["String"];
};

export type SignInInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type SignInPayload = {
  __typename?: "SignInPayload";
  accessToken: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["ID"];
  roles?: Maybe<Array<Scalars["String"]>>;
  username: Scalars["String"];
};

export type SignUpInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn: {
    __typename?: "SignInPayload";
    id: string;
    username: string;
    email: string;
    accessToken: string;
    roles?: Array<string> | null;
  };
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = { __typename?: "Mutation"; signUp: string };

export type FetchAllMealsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchAllMealsQuery = {
  __typename?: "Query";
  fetchAllMeals: Array<{
    __typename?: "Meal";
    id: string;
    name: string;
    description: string;
    price: number;
  }>;
};

export type AddRestaurantMutationVariables = Exact<{
  input: AddRestaurantInput;
  userId: Scalars["ID"];
}>;

export type AddRestaurantMutation = {
  __typename?: "Mutation";
  addRestaurant: string;
};

export type FetchAllRestaurantsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchAllRestaurantsQuery = {
  __typename?: "Query";
  fetchAllRestaurants: Array<{
    __typename?: "Restaurant";
    id: string;
    name: string;
    description: string;
    meals: Array<{
      __typename?: "Meal";
      id: string;
      name: string;
      description: string;
      price: number;
    } | null>;
  } | null>;
};

export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      id
      username
      email
      accessToken
      roles
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input)
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const FetchAllMealsDocument = gql`
  query FetchAllMeals {
    fetchAllMeals {
      id
      name
      description
      price
    }
  }
`;

/**
 * __useFetchAllMealsQuery__
 *
 * To run a query within a React component, call `useFetchAllMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllMealsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchAllMealsQuery,
    FetchAllMealsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchAllMealsQuery, FetchAllMealsQueryVariables>(
    FetchAllMealsDocument,
    options
  );
}
export function useFetchAllMealsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchAllMealsQuery,
    FetchAllMealsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchAllMealsQuery, FetchAllMealsQueryVariables>(
    FetchAllMealsDocument,
    options
  );
}
export type FetchAllMealsQueryHookResult = ReturnType<
  typeof useFetchAllMealsQuery
>;
export type FetchAllMealsLazyQueryHookResult = ReturnType<
  typeof useFetchAllMealsLazyQuery
>;
export type FetchAllMealsQueryResult = Apollo.QueryResult<
  FetchAllMealsQuery,
  FetchAllMealsQueryVariables
>;
export const AddRestaurantDocument = gql`
  mutation AddRestaurant($input: AddRestaurantInput!, $userId: ID!) {
    addRestaurant(input: $input, userId: $userId)
  }
`;
export type AddRestaurantMutationFn = Apollo.MutationFunction<
  AddRestaurantMutation,
  AddRestaurantMutationVariables
>;

/**
 * __useAddRestaurantMutation__
 *
 * To run a mutation, you first call `useAddRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRestaurantMutation, { data, loading, error }] = useAddRestaurantMutation({
 *   variables: {
 *      input: // value for 'input'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddRestaurantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddRestaurantMutation,
    AddRestaurantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddRestaurantMutation,
    AddRestaurantMutationVariables
  >(AddRestaurantDocument, options);
}
export type AddRestaurantMutationHookResult = ReturnType<
  typeof useAddRestaurantMutation
>;
export type AddRestaurantMutationResult =
  Apollo.MutationResult<AddRestaurantMutation>;
export type AddRestaurantMutationOptions = Apollo.BaseMutationOptions<
  AddRestaurantMutation,
  AddRestaurantMutationVariables
>;
export const FetchAllRestaurantsDocument = gql`
  query FetchAllRestaurants {
    fetchAllRestaurants {
      id
      name
      description
      meals {
        id
        name
        description
        price
      }
    }
  }
`;

/**
 * __useFetchAllRestaurantsQuery__
 *
 * To run a query within a React component, call `useFetchAllRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllRestaurantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchAllRestaurantsQuery,
    FetchAllRestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchAllRestaurantsQuery,
    FetchAllRestaurantsQueryVariables
  >(FetchAllRestaurantsDocument, options);
}
export function useFetchAllRestaurantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchAllRestaurantsQuery,
    FetchAllRestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchAllRestaurantsQuery,
    FetchAllRestaurantsQueryVariables
  >(FetchAllRestaurantsDocument, options);
}
export type FetchAllRestaurantsQueryHookResult = ReturnType<
  typeof useFetchAllRestaurantsQuery
>;
export type FetchAllRestaurantsLazyQueryHookResult = ReturnType<
  typeof useFetchAllRestaurantsLazyQuery
>;
export type FetchAllRestaurantsQueryResult = Apollo.QueryResult<
  FetchAllRestaurantsQuery,
  FetchAllRestaurantsQueryVariables
>;
