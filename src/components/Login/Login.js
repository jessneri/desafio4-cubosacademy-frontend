import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../pictures/cubosacademy.svg";
import show from "../../pictures/mostrarsenha.svg";
import dontshow from "../../pictures/escondersenha.svg";
import "./Login.css";

import { AuthContainer } from "../../hooks/auth";

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = React.useState("password");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const { token, login } = AuthContainer.useContainer();

  const history = useHistory();

  return (
    <div className="principal-login">
      <div className="login">
        <img src={logo} alt="cubosacademy"></img>
        <form
          className="inputs"
          onSubmit={async (event) => {
            event.preventDefault();
            await login(email, senha);
            history.push("/home");
          }}
        >
          <label>
            <span>E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@gmail.com"
            ></input>
          </label>
          <label className="senha">
            <span>Senha</span>
            <div>
              <input
                type={mostrarSenha}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              ></input>
              <button
                className="showPassword"
                type="button"
                onClick={() =>
                  mostrarSenha !== "password"
                    ? setMostrarSenha("password")
                    : setMostrarSenha("text")
                }
              >
                <img
                  alt=""
                  src={mostrarSenha === "password" ? show : dontshow}
                ></img>
              </button>
            </div>
          </label>
          <p>Esqueci minha senha</p>
          <button type="submit">Entrar</button>
        </form>
      </div>
      <span>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se!</Link>
      </span>
    </div>
  );
}
