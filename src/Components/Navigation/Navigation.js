import { categoryNames } from "../../utils.js";
import React from "react";
import "./Navigation.css";
import logo from "../../images/logo.svg";

export const Navigation = ({
  onNavClick,
  currentCategory,
  className = "",
  placement = "header",
}) => {
  return (
    <nav className={`grid navigation navigation--${placement} ${className}`}>
      <a href="/" className="navigation__logo">
        <img
          className="navigation__image"
          data-href="index"
          alt="Логотип"
          src={logo}
        />
      </a>
      <ul className="navigation__list">
        {["index", "fashion", "tech", "politics", "sport"].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <a
                href="#"
                className={`navigation__link ${
                  currentCategory === item ? "navigation__link--active" : ""
                }`}
                data-href={item}
                onClick={onNavClick}
              >
                {categoryNames[item]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
