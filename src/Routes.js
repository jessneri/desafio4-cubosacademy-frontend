import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

/* páginas importadas */
import Login from "./components/Login/Login";
import cadastroUser from "./components/CadastroUser/cadastroUser";
import Home from "./components/Home/Home";
import Cobrancas from "./components/Cobrancas/Cobrancas";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/cadastro" component={cadastroUser} />
          {/*<AreaPrivada path="/home" component={Home} />*/}
          <Route path="/home" component={Home} />
          <Route path="/cobrancas" component={Cobrancas} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
