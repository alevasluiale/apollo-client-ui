import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useTypedSelector } from "./redux/useTypedSelector";
import { useLocalStorage } from "usehooks-ts";
import { User } from "./utils/types";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(window.localStorage.getItem("user") || "") as User;
  const token = user?.accessToken;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const getClient = (): ApolloClient<any> => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
};
