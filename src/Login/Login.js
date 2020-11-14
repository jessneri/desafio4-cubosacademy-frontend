import React from "react";
import logo from "./cubosacademy.svg";
import "./Login.css";

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = React.useState("password");

  return (
    <div className="principal">
      <div className="login">
        <img src={logo} alt="cubosacademy"></img>
        <div className="inputs">
          <label>
            <span>E-mail</span>
            <input type="email" placeholder="exemplo@gmail.com"></input>
          </label>
          <label className="senha">
            <span>Senha</span>
            <input type="password"></input>
          </label>
          <p>Esqueci minha senha</p>
        </div>
        <button>Entrar</button>
      </div>
      <span>
        Não tem uma conta? <a href="http://">Cadastre-se!</a>
      </span>
    </div>
  );
}
