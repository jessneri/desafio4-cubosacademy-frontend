import React from "react";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import SaldoEmConta from "../Carteira/SaldoEmConta";
import QuadrosDeClientes from "./QuadroDeClientes";
import QuadrosDeCobrancas from "./QuadroDeCobrancas";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="corpo">
        <div className="centro">
          <SaldoEmConta />
          <div className="principal-home">
            <div className="botoes">
              <button>Este mês</button>
              <button>Este ano</button>
              <button>Desde o início</button>
            </div>
            <div className="quadros-info">
              <QuadrosDeClientes />
              <QuadrosDeCobrancas />
            </div>
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
