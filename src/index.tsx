import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory } from "history";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as routePaths from "./constants/routePaths";
import Register from "./authentication/components/Register";

const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router history={history}>
      {/*<Switch>*/}
      {/*  <Route*/}
      {/*    exact*/}
      {/*    path={routePaths.HOME}*/}
      {/*    render={() => (*/}
      {/*      <div>*/}
      {/*        <a href={"/sign-up"}>sign up</a>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*  <Route path={routePaths.SIGN_UP} render={() => <Register />} />*/}
      {/*</Switch>*/}
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
