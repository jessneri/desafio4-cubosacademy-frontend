import React from "react";
import { createContainer } from "unstated-next";
import apiFetch from "../services/api";

export const AuthContainer = createContainer(() => {
  const [token, setToken] = React.useState(null);

  function login(email, senha) {
    return apiFetch("/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => res.json())
      .then((dados) => setToken(dados.dados.token));
  }

  function novoLogin(email, senha, nome) {
    apiFetch("/usuarios", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
      }),
    })
      .then((res) => res.json())
      .then((dados) => setToken(dados.dados.token));
  }

  function logout() {
    setToken(null);
  }

  return { token, login, novoLogin, logout };
});
