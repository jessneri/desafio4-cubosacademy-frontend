import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import SaldoEmConta from "../Carteira/SaldoEmConta";
import Pesquisa from "../Pesquisa/Pesquisa";

import switchPago from "../../pictures/switchPago.svg";
import switchPendente from "../../pictures/switchPendente.svg";
import imprimir from "../../pictures/imprimir.svg";

import "./Cobrancas.css";
import { AuthContainer } from "../../hooks/auth";

export default function Cobrancas() {
  const { listarCobrancas, cobrancas } = AuthContainer.useContainer();

  React.useEffect(() => {
    listarCobrancas();
  }, []);

  return (
    <div className="page-cobrancas">
      <Header />
      <div className="corpo">
        <div className="conta">
          <SaldoEmConta />
          <div className="principal-cobrancas">
            <div className="header-cobrancas">
              <Pesquisa />
            </div>
            <table>
              <thead>
                <tr>
                  <td>Clientes</td>
                  <td>Descrição</td>
                  <td>Valor</td>
                  <td>Status</td>
                  <td>Vencimento</td>
                  <td>Boleto</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Ana Maria</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td className="pago">
                    <img alt="" src={switchPago}></img>
                    <span>PAGO</span>
                  </td>
                  <td>12/12/2020</td>
                  <td className="imprimir">
                    <img alt="" src={imprimir}></img>
                  </td>
                </tr>
                {cobrancas.map((cobranca) => (
                  <tr>
                    <td>{cobranca.nome}</td>
                    <td>{cobranca.descricao}</td>
                    <td>{cobranca.valor}</td>
                    {(cobranca) => {
                      if (cobranca.status === "PAGO") {
                        return (
                          <td className="pago">
                            <img alt="" src={switchPago}></img>
                            <span>PAGO</span>
                          </td>
                        );
                      } else if (cobranca.status === "AGUARDANDO") {
                        return (
                          <td className="pendente">
                            <img alt="" src={switchPendente}></img>
                            <span>PENDENTE</span>
                          </td>
                        );
                      } else {
                        return (
                          <td className="vencido">
                            <span>VENCIDO</span>
                          </td>
                        );
                      }
                    }}
                    <td>{cobranca.vencimento}</td>
                    <td className="imprimir">
                      <img
                        alt=""
                        src={imprimir}
                        href={cobranca.linkdoboleto}
                      ></img>
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
