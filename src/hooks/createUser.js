import React from "react";
import { createContainer } from "unstated-next";
import apiFetch from "../services/api";

export const UserContainer = createContainer(() => {
  const [novoUser, setNovoUser] = React.useState(null);

  function novoLogin(email, senha, nome) {
    apiFetch("/usuarios", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
      })
        .then((res) => res.json())
        .then((dados) => setNovoUser(dados.dados.token)),
    });
  }

  return { novoLogin };
});
