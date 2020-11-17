import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../pictures/cubosacademy-white.svg";
import btHome from "../pictures/btHome.svg";
import btCobranca from "../pictures/btCobranca.svg";
import btCliente from "../pictures/btCliente.svg";
import cifrao from "../pictures/cifrao.svg";
import deslogar from "../pictures/deslogar.svg";
import user from "../pictures/user.png";

import "./Home.css";

export default function Home() {
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="home">
      <header>
        <img src={logoWhite} alt=""></img>
        <div className="botoes-home">
          <button>
            <img src={btHome} alt=""></img>
            HOME
          </button>
          <button>
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
      <div className="corpo">
        <div className="conta">
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
          <div className="principal">
            <div className="botoes">
              <button>Este mês</button>
              <button>Este mês</button>
              <button>Este mês</button>
            </div>
          </div>
        </div>
        <div className="deslogar">
          <img
            alt=""
            src={user}
            onClick={() => (menu === true ? setMenu(false) : setMenu(true))}
          ></img>
          {menu === true ? (
            <button>
              <img alt="" src={deslogar}></img>
              Deslogar
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
