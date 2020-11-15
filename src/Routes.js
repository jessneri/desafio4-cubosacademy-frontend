import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* páginas importadas */
import Login from "./Login/Login";
import cadastroUser from "./CadastroUser/cadastroUser";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/cadastro" component={cadastroUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
