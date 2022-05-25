import React from "react";

import { Btn } from "./style.js"

function Button(props) {
  return <Btn className={`btn first ${props.className}`} onClick={props.onClick}>
            {props.children}
          </Btn>;
}

export default Button;