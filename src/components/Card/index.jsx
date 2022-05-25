import React from "react";

import { CardContainer } from "./style.js"

function Card(props) {
  return (
    <CardContainer>
        <div>
            <h1>{props.date}</h1>
            <h3>{props.local}</h3>
            <span>{props.description}</span>
        </div>
        
    </CardContainer>
  );
}

export default Card;