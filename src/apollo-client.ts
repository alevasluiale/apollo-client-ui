import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = (): ApolloClient<any> => {
  return new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
};
