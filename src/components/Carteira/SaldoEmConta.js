import React from "react";
import cifrao from "../../pictures/cifrao.svg";

import "./SaldoEmConta.css";

export default function SaldoEmConta() {
  return (
    <div className="saldoEmConta">
      <div>
        <img alt="" src={cifrao}></img>
      </div>
      <div className="saldo">
        <span>Saldo em conta</span>
        <span className="valor">
          R$ <span>0,00</span>
        </span>
      </div>
    </div>
  );
}
