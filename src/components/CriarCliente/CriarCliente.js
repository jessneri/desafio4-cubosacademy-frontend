/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";

import "./CriarCliente.css";

import { AuthContainer } from "../../hooks/auth";

export default function CriarCliente() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const history = useHistory();

  const { register, handleSubmit, errors, trigger } = useForm({
    mode: "all",
  });
  const { criarCliente, token } = AuthContainer.useContainer();

  React.useEffect(() => trigger(), [trigger]);
  const qtdErros = Object.keys(errors).length;

  const nomeRef = React.useRef();
  const emailRef = React.useRef();
  const cpfRef = React.useRef();
  const telefoneRef = React.useRef();

  return (
    <div className="novocliente">
      <Header />
      <div className="corpo">
        <div className="centro">
          <div className="criar-cliente">
            <h1>// ADICIONAR CLIENTE</h1>
            <form
              onSubmit={handleSubmit((dados, event) => {
                console.log(dados);
                criarCliente(nome, email, cpf, telefone);
                event.target.reset();
              })}
            >
              <label>
                Nome
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setNome(e.target.value)}
                  ref={(element) => {
                    nomeRef.current = element;
                    register({
                      required: true,
                      validate: () => element.checkValidity(),
                    })(element);
                  }}
                ></input>
              </label>
              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  ref={(element) => {
                    emailRef.current = element;
                    register({
                      required: true,
                      validate: () => element.checkValidity(),
                    })(element);
                  }}
                ></input>
              </label>
              <div>
                <label className="cpf">
                  CPF
                  <input
                    type="number"
                    name="cpf"
                    onChange={(e) => setCpf(e.target.value)}
                    ref={(element) => {
                      cpfRef.current = element;
                      register({
                        required: true,
                        validate: () => element.checkValidity(),
                      })(element);
                    }}
                  ></input>
                </label>
                <label className="telefone">
                  Telefone
                  <input
                    type="number"
                    name="telefone"
                    onChange={(e) => setTelefone(e.target.value)}
                    ref={(element) => {
                      telefoneRef.current = element;
                      register({
                        required: true,
                        validate: () => element.checkValidity(),
                      })(element);
                    }}
                  ></input>
                </label>
              </div>
              <div className="botoes">
                <button
                  className="cancelar"
                  onClick={() => history.push("/clientes")}
                >
                  Cancelar
                </button>
                <button type="submit" className="criarCliente">
                  Adicionar Cliente
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
