import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../pictures/cubosacademy.svg";
import show from "../../pictures/mostrarsenha.svg";
import dontshow from "../../pictures/escondersenha.svg";
import "./Login.css";

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = React.useState("password");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="principal-login">
      <div className="login">
        <img src={logo} alt="cubosacademy"></img>
        <form
          className="inputs"
          onSubmit={(event) => {
            event.preventDefault();
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        </form>
        <button>Entrar</button>
      </div>
      <span>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se!</Link>
      </span>
    </div>
  );
}
