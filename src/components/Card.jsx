import React from "react";

function Card(props) {
  return (
    <section className="card">
        <div>
            <h1>{props.date}</h1>
            <h3>{props.local}</h3>
            <span>{props.description}</span>
        </div>
        
    </section>
  );
}

export default Card;