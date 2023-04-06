import { useIsUserAuthenticatedQuery } from "../../../generated/graphql-types";
import { getClient } from "../../../apollo-client";
import { useLocalStorage } from "usehooks-ts";
import { User } from "../../../utils/types";
import { message } from "antd";

const client = getClient();

const useIsUserAuthenticated = () => {
  const [user, setUserData] = useLocalStorage("user", null as User);

  const { data, error, loading } = useIsUserAuthenticatedQuery({
    client,
    variables: {
      userName: user?.username || "",
    },
    skip: user === null,
  });

  if (error) {
    message.error("Failed to authenticate user", 2);
  }

  if (data && !data.isUserAuthenticated) {
    console.log("HERE", user, data);
    setUserData(null);
  }

  return loading;
};

export default useIsUserAuthenticated;
