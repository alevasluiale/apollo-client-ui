import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const getClient = (): ApolloClient<any> => {
  return new ApolloClient({
    uri: process.env.BFF_URL,
    cache: new InMemoryCache(),
  });
};
