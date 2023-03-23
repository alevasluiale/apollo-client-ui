import { Route, Switch } from "react-router-dom";
import * as routePaths from "./constants/routePaths";
import Register from "./authentication/components/Register";
import React from "react";

function AppFramework() {
  return (
    <Switch>
      <Route exact path={routePaths.HOME} render={() => <div>HOME</div>} />
      <Route exact path={routePaths.SIGN_UP} component={Register} />
    </Switch>
  );
}

export default AppFramework;
