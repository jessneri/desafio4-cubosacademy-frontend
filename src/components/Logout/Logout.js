import React from "react";
import deslogar from "../../pictures/deslogar.svg";
import user from "../../pictures/user.png";

import "./Logout.css";

export default function Logout() {
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="deslogar">
      <img
        alt=""
        src={user}
        onClick={() => (menu === true ? setMenu(false) : setMenu(true))}
      ></img>
      {menu === true ? (
        <button>
          <img alt="" src={deslogar}></img>
          Deslogar
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
