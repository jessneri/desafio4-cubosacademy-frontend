import React from "react";
import btCobranca from "../../pictures/btCobranca.svg";

import "./Quadros.css";

export default function QuadrosDeCobrancas() {
  return (
    <div className="quadros cobrancas">
      <div className="titulo">
        <img alt="" src={btCobranca}></img>
        Cobranças
      </div>
      <div className="quadro-total">
        <div className="previstas">
          <span>Previstas</span>
          <span className="qtd-previstas">0</span>
        </div>
        <div className="vencidas">
          <span>Vencidas</span>
          <span className="qtd-vencidas">0</span>
        </div>
        <div className="pagas">
          <span>Pagas</span>
          <span className="qtd-pagas">0</span>
        </div>
      </div>
    </div>
  );
}
