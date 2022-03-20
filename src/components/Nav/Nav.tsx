import classNames from "classnames";
import React, { useEffect, useState } from "react";
import logo from "../../assets";
import { Networks, NetworkUrls } from "../../types";
import "./Nav.scss";

function Nav() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setIsScrolledDown(true);
      } else setIsScrolledDown(false);
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className={classNames("nav", {
        "nav__black-bg": isScrolledDown,
      })}
    >
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
