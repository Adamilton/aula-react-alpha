import React, {createContext, useState} from 'react';

export const TaskContext = createContext({});

export const TaskProvider = (props) => {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [local, setLocal] = useState("");
  
    const [cards, setCards] = useState([])
  
    function handleData(event){
      const newCard = {
        description: description,
        date: date,
        local: local
      }
  
      let allCards = cards;
      allCards.push(newCard);
      setCards(allCards)
      clearInput()
    }
  
    function clearInput(){
        setDescription("")
        setDate("")
        setLocal("")
    }
   
    return(
        <TaskContext.Provider
            value={{
                description,
                setDescription,
                date,
                setDate,
                local,
                setLocal,
                cards,
                setCards,
                handleData,
                clearInput
            }}
        >

            {props.children}
        </TaskContext.Provider>
    )
}