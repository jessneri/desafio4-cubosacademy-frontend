import React from "react";
import logoWhite from "../pictures/cubosacademy-white.svg";
import btHome from "../pictures/btHome.svg";
import btCobranca from "../pictures/btCobranca.svg";
import btCliente from "../pictures/btCliente.svg";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logoWhite} alt=""></img>
      <div className="botoes-home">
        <button Link to="/home">
          <img src={btHome} alt=""></img>
          HOME
        </button>
        <button Link to="/cobrancas">
          <img src={btCobranca} alt=""></img>
          COBRANÇAS
        </button>
        <button>
          <img src={btCliente} alt=""></img>
          CLIENTES
        </button>
      </div>
      <button>Criar cobranças</button>
    </header>
  );
}
