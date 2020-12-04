import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

/* páginas importadas */
import Login from "./components/Login/Login";
import CadastroUser from "./components/CadastroUser/cadastroUser";
import Home from "./components/Home/Home";
import Cobrancas from "./components/Cobrancas/Cobrancas";
import Clientes from "./components/Clientes/Clientes";
import CriarCobrancas from "./components/CriarCobrancas/CriarCobrancas";
import CriarCliente from "./components/CriarCliente/CriarCliente";
import EditarClientes from "./components/EditarClientes/EditarClientes";

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
            <PrivateRouter path="/home" component={Home} Redirect to="/" />
            <PrivateRouter path="/cobrancas" component={Cobrancas} />
            <PrivateRouter path="/clientes" component={Clientes} />
            <PrivateRouter path="/criarcobrancas" component={CriarCobrancas} />
            <PrivateRouter path="/criarcliente" component={CriarCliente} />
            <PrivateRouter path="/editarclientes" component={EditarClientes} />
          </Switch>
        </BrowserRouter>
      </AuthContainer.Provider>
    </div>
  );
}
