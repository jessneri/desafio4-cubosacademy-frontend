import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* páginas importadas */
import Login from "./components/Login/Login";
import CadastroUser from "./components/CadastroUser/cadastroUser";
import Home from "./components/Home/Home";
import Cobrancas from "./components/Cobrancas/Cobrancas";

import { AuthContainer } from "./hooks/auth";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import PublicRouter from "./components/PublicRouter/PublicRouter";

export default function Routes() {
  return (
    <div className="App">
      <AuthContainer.Provider>
        <BrowserRouter>
          <Switch>
            <PublicRouter path="/" exact={true} component={Login} />
            <PublicRouter path="/cadastro" component={CadastroUser} />
            <PrivateRouter path="/home" component={Home} redirect="/" />
            <Route path="/cobrancas" component={Cobrancas} />
          </Switch>
        </BrowserRouter>
      </AuthContainer.Provider>
    </div>
  );
}
