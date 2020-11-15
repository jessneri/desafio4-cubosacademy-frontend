import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* páginas importadas */
import Login from "./Login/Login";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
