/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

import Header from "../Header/Header";
import Logout from "../Logout/Logout";

import "./CriarCobrancas.css";

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function CriarCobrancas() {
  return (
    <div className="novacobrancas">
      <Header />
      <div className="corpo">
        <div className="centro">
          <div className="criar-cobranca">
            <h1>// CRIAR COBRANÇA</h1>
            <form>
              <label>
                Cliente
                <select>
                  <option>Cliente 1</option>
                  <option>Cliente 2</option>
                  <option>Cliente 3</option>
                </select>
              </label>
              <label>
                Descrição
                <textarea name="textarea" rows="2" cols="30"></textarea>
              </label>
              <div className="div1">
                <label>
                  Valor
                  <input
                    type="number"
                    placeholder="R$ 0,00"
                    step="0.01"
                    className="number"
                  ></input>
                </label>
                <label>
                  Vencimento
                  <Space
                    className="calendarioAntd"
                    direction="vertical"
                    style={{
                      width: "auto",
                    }}
                  >
                    <DatePicker onChange={onChange} />
                  </Space>
                </label>
              </div>
              <div className="botoes">
                <button className="cancelar">Cancelar</button>
                <button className="criar">Criar cobrança</button>
              </div>
            </form>
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
}
