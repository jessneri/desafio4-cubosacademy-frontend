import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* páginas importadas */
import Login from "./Login/Login";
import cadastroUser from "./CadastroUser/cadastroUser";
import Home from "./Home/Home";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/cadastro" component={cadastroUser} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
