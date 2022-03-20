import React from "react";
import logo from "../../assets/logo.png";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="Netflix Logo" className="nav__logo" />
    </div>
  );
}

export default Nav;
