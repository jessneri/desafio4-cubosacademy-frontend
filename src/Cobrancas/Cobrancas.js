import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import SaldoEmConta from "../Carteira/SaldoEmConta";

import "./Cobrancas.css";

export default function Cobrancas() {
  return (
    <div className="page-cobrancas">
      <Header />
      <div className="corpo">
        <div className="conta">
          <SaldoEmConta />
          <div className="principal-cobrancas"></div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
