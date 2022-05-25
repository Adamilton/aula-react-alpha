import React, {useContext} from "react";

import { FormsContainer } from "./style.js"

function Forms(props) {
  
  return (
    <FormsContainer>
        <div className="inputs">
            <input type="text" placeholder="Descrição" value={props.description} className="description" onInput={(event) => props.setDescription(event.target.value)}/>
            <input type="date" placeholder="Data" value={props.date} className="date"  onInput={(event) => props.setDate(event.target.value)}/>
            <input type="text" placeholder="Local" value={props.local} className="local"  onInput={(event) => props.setLocal(event.target.value)}/>
        </div>
        <div className="buttons">
            <button type="button" onClick={props.handleData}>Adicionar</button>
            <button type="button" onClick={props.clearInput} className="clear">Limpar</button>
        </div>
    </FormsContainer>
  );
}

export default Forms;