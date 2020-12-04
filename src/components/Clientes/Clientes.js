import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import SaldoEmConta from "../Carteira/SaldoEmConta";
import Pesquisa from "../Pesquisa/Pesquisa";

import email from "../../pictures/email.svg";
import phone from "../../pictures/phone.svg";
import editar from "../../pictures/editar.svg";

import "./Clientes.css";

import { AuthContainer } from "../../hooks/auth";

export default function Clientes() {
  const history = useHistory();

  const { listarClientes, clientes } = AuthContainer.useContainer();

  React.useEffect(() => {
    console.log(listarClientes);
    listarClientes();
  }, []);

  return (
    <div className="page-clientes">
      <Header />
      <div className="corpo">
        <div className="conta">
          <SaldoEmConta />
          <div className="principal-clientes">
            <div className="header-clientes">
              <button
                className="add-cliente"
                onClick={() => history.push("/criarcliente")}
              >
                Adicionar cliente
              </button>
              <Pesquisa />
            </div>

            <table>
              <thead>
                <tr>
                  <td>Cliente</td>
                  <td>Cobranças Feitas</td>
                  <td>Cobranças Recebidas</td>
                  <td>Status</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dados">
                    <span className="nome">Ana Maria</span>
                    <div>
                      <img alt="" src={email} className="imagem"></img>
                      <span>email@email.com</span>
                    </div>
                    <div>
                      <img alt="" src={phone} className="imagem"></img>
                      <span>(DDD) 00000-0000</span>
                    </div>
                  </td>
                  <td>R$ 00.000,00</td>
                  <td>R$ 00.000,00</td>
                  <td className="em-dia">EM DIA</td>
                  <td>
                    <img alt="" src={editar} className="imagem"></img>
                  </td>
                </tr>
                {clientes.map((cliente) => (
                  <tr>
                    <td className="dados">
                      <span className="nome">{cliente.nome}</span>
                      <div>
                        <img alt="" src={email} className="imagem"></img>
                        <span>{cliente.email}</span>
                      </div>
                      <div>
                        <img alt="" src={phone} className="imagem"></img>
                        <span>{cliente.tel}</span>
                      </div>
                    </td>
                    <td>R$ {cliente.cobrancasFeitas}</td>
                    <td>R$ {cliente.cobrancasRecebidas}</td>
                    {cliente.estaInadimplente !== true ? (
                      <td className="em-dia">EM DIA</td>
                    ) : (
                      <td className="inadiplente">INADIPLENTE</td>
                    )}

                    <td>
                      <button onClick={() => history.push("/editarclientes")}>
                        <img alt="" src={editar} className="imagem"></img>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
