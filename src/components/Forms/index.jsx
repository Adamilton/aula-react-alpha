import React, {useContext} from "react";

import { FormsContainer } from "./style.js"
import Button from "../Button"
import { TaskContext } from "../../context/TaskContext";


function Forms() {
  const {description, setDescription, date, local, setDate, setLocal, handleData, clearInput} = useContext(TaskContext);
  
  return (
    <FormsContainer>
        <div className="inputs">
            <input type="text" placeholder="Descrição" value={description} className="description" onInput={(event) => setDescription(event.target.value)}/>
            <input type="date" placeholder="Data" value={date} className="date"  onInput={(event) => setDate(event.target.value)}/>
            <input type="text" placeholder="Local" value={local} className="local"  onInput={(event) => setLocal(event.target.value)}/>
        </div>
        <div className="buttons">
            <Button type="button" className="form" onClick={handleData}>Adicionar</Button>
            <Button type="button" className="form clear" onClick={clearInput}>Limpar</Button>
        </div>
    </FormsContainer>
  );
}

export default Forms;