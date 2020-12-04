import React from "react";
import deslogar from "../../pictures/deslogar.svg";
import user from "../../pictures/user.png";

import "./Logout.css";
import { AuthContainer } from "../../hooks/auth";

export default function Logout() {
  const [menu, setMenu] = React.useState(false);

  const { logout } = AuthContainer.useContainer();

  // eslint-disable-next-line no-lone-blocks
  {
    /* ajustar logout */
  }

  return (
    <div className="deslogar">
      <img
        alt=""
        src={user}
        onClick={() => (menu === true ? setMenu(false) : setMenu(true))}
      ></img>
      {menu === true ? (
        <button onClick={logout}>
          <img alt="" src={deslogar}></img>
          Deslogar
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
