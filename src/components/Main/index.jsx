import React, {useContext} from "react";

import Card from '../Card';
import Forms from "../Forms"

import { TaskContext } from "../../context/TaskContext";
import { Container } from "./style.js"

function Main() {
  const {cards} = useContext(TaskContext);

  return <>
    <Forms />
      
    <Container>
      {
        cards.map(card => <Card description={card.description} date={card.date} local={card.local}/>)
      }
    </Container>;
  </>
}

export default Main;