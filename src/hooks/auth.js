import React from "react";
import { createContainer } from "unstated-next";
import apiFetch from "../services/api";
import { useHistory } from "react-router-dom";

export const AuthContainer = createContainer(() => {
  const [token, setToken] = React.useState(null);
  const [clientes, setClientes] = React.useState([]);
  const [cobrancas, setCobrancas] = React.useState([]);

  const history = useHistory();

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
      .then((dados) => {
        setToken(dados.dados.token);
        console.log(dados);
      });
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

  function criarCliente(nome, email, cpf, telefone) {
    return apiFetch("/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
      }),
    })
      .then((res) => res.json())
      .then((dados) => {
        setToken(dados.dados.token);
        console.log(dados);
      });
  }

  function listarClientes() {
    //setLoading(true)
    apiFetch("/clientes?clientesPorPagina=10&offset=0", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dados) => setClientes(dados.dados.clientes));
  }

  function listarCobrancas() {
    apiFetch("/cobrancas?cobrancasPorPagina=10&offset=0", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dados) => setCobrancas(dados.dados.cobrancas));
  }

  function logout() {
    setToken(null);
    history.push("/");
  }

  return {
    token,
    login,
    novoLogin,
    criarCliente,
    listarClientes,
    listarCobrancas,
    clientes,
    cobrancas,
    logout,
  };
});
