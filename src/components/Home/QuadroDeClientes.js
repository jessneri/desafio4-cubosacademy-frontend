import React from "react";
import btCliente from "../../pictures/btCliente.svg";

import "./Quadros.css";

export default function QuadrosDeClientes() {
  return (
    <div className="quadros clientes">
      <div className="titulo">
        <img alt="" src={btCliente}></img>
        Clientes
      </div>
      <div className="quadro-total">
        <div className="em-dia">
          <span>Em dia</span>
          <span className="qtd-em-dia">0</span>
        </div>
        <div className="inadimplentes">
          <span>Inadimplentes</span>
          <span className="qtd-inadimplentes">0</span>
        </div>
      </div>
    </div>
  );
}
