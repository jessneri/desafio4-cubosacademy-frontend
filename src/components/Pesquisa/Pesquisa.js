import React from "react";
import search from "../../pictures/search.svg";

import "./Pesquisa.css";

export default function Pesquisa() {
  return (
    <form className="form-pesquisa">
      <label>
        <input
          type="text"
          className="input-pesquisa"
          placeholder="Procurar por Nome, E-mail ou CPF"
        ></input>
      </label>
      <button>
        <img alt="pesquisa" src={search}></img>
        Buscar
      </button>
    </form>
  );
}
