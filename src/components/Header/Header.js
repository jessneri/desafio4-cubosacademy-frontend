import React from "react";
import { useHistory } from "react-router-dom";
import logoWhite from "../../pictures/cubosacademy-white.svg";
import btHome from "../../pictures/btHome.svg";
import btCobranca from "../../pictures/btCobranca.svg";
import btCliente from "../../pictures/btCliente.svg";

import "./Header.css";

export default function Header() {
  const history = useHistory();

  return (
    <header>
      <img src={logoWhite} alt=""></img>
      <div className="botoes-home">
        <button onClick={() => history.push("/home")}>
          <img src={btHome} alt=""></img>
          HOME
        </button>
        <button onClick={() => history.push("/cobrancas")}>
          <img src={btCobranca} alt=""></img>
          COBRANÇAS
        </button>
        <button onClick={() => history.push("/clientes")}>
          <img src={btCliente} alt=""></img>
          CLIENTES
        </button>
      </div>
      <button onClick={() => history.push("/criarcobrancas")}>
        Criar cobranças
      </button>
    </header>
  );
}
