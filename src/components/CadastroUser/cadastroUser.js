import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../pictures/cubosacademy.svg";

import "./cadastroUser.css";

import { AuthContainer } from "../../hooks/auth";

export default function CadastroUser() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [mostrarSenha, setMostrarSenha] = React.useState("password");

  const { novoLogin } = AuthContainer.useContainer();
  const history = useHistory();
  return (
    <div className="principal-cadastro">
      <div className="login">
        <img src={logo} alt="cubosacademy"></img>
        <form
          className="inputs"
          onSubmit={async (event) => {
            console.log(nome);
            event.preventDefault();
            novoLogin(email, senha, nome);
            history.push("/");
          }}
        >
          <label>
            <span>Nome</span>
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
            ></input>
          </label>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@gmail.com"
            ></input>
          </label>
          <label className="senha">
            <span>Senha</span>
            <input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </label>
          <button type="submit" className="botaoCriarConta">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}
