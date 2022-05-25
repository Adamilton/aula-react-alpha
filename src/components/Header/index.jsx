import React from "react";

import UserIcon from "../../assets/user.svg";
import Button from "../Button";

import { HeaderBar, Logo, UserProfile } from "./style.js"

function Header() {
  return (
    <HeaderBar>
      <Logo className="logo"></Logo>
      <div className="menu">
          <Button className="selected">Today</Button>
          <Button >Weekly</Button>
          <Button >Monthly</Button>
      </div>
      <UserProfile className="user-profile">
        <img src={UserIcon} alt="User Profil" />
      </UserProfile>
    </HeaderBar>
  );
}

export default Header;