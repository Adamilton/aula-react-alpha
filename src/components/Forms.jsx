import React from "react";

import UserIcon from "../assets/user.svg";
import Button from "./Button";
function Forms() {
  return (
    <section className="forms">
        <div className="inputs">
            <input type="text" placeholder="Descrição" className="description"/>
            <input type="date" placeholder="Data" className="date"/>
            <input type="text" placeholder="Local" className="local"/>
        </div>
        <div className="buttons">
            <button type="submit">Adicionar</button>
            <button type="submit" className="clear">Limpar</button>
        </div>
    </section>
  );
}

export default Forms;