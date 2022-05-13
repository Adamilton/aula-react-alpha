import React from "react";
import './index.css';

import UserIcon from './assets/user.svg';

function App() {
  return (
    <>
      <header>
        <div className="logo"></div>
        <div className="menu">
          <button className="btn first selected">Btn 01</button>
          <button className="btn second">Btn 02</button>
          <button className="btn third">Btn 03</button>
          <button className="btn fourth">Btn 04</button>
        </div>
        <div className="user-profile">
          <img src={UserIcon} alt="User Profil" />
        </div>
      </header>
      <main></main>
    </>
  );
}

export default App;
