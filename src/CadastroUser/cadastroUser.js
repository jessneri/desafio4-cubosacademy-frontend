import React from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/cubosacademy.svg";

import "./cadastroUser.css";

export default function cadastroUser() {
  return (
    <div className="principal-cadastro">
      <div className="login">
        <img src={logo} alt="cubosacademy"></img>
        <div className="inputs">
          <label>
            <span>Nome</span>
            <input type="text"></input>
          </label>
          <label>
            <span>E-mail</span>
            <input type="email" placeholder="exemplo@gmail.com"></input>
          </label>
          <label className="senha">
            <span>Senha</span>
            <input type="password"></input>
          </label>
        </div>
        <button Link to="/home" className="botaoCriarConta">
          Criar conta
        </button>
      </div>
    </div>
  );
}
