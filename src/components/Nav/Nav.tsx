import React from "react";
import logo from "../../assets";
import { Networks, NetworkUrls } from "../../types";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav">
      {Object.keys(Networks).map((networkId) => {
        return (
          <a
            key={networkId}
            className="nav__link"
            href={NetworkUrls[networkId]}
          >
            <img
              src={logo[networkId]}
              alt="Netflix Logo"
              className="nav__logo"
            />
          </a>
        );
      })}
    </div>
  );
}

export default Nav;
