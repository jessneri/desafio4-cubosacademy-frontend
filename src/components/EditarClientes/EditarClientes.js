/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";

import "./EditarClientes.css";

export default function EditarClientes() {
  const history = useHistory();

  return (
    <div className="editar">
      <Header />
      <div className="corpo">
        <div className="centro">
          <div className="editar-cliente">
            <h1>// ADICIONAR CLIENTE</h1>
            <form>
              <label>
                Nome
                <input type="text"></input>
              </label>
              <label>
                E-mail
                <input type="email"></input>
              </label>
              <div>
                <label className="cpf">
                  CPF
                  <input type="number"></input>
                </label>
                <label className="telefone">
                  Telefone
                  <input type="number"></input>
                </label>
              </div>
              <div className="botoes">
                <button
                  className="cancelar"
                  onClick={() => history.push("/clientes")}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="editarCliente"
                  onClick={() => history.push("/clientes")}
                >
                  Salvar alterações
                </button>
              </div>
            </form>
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
