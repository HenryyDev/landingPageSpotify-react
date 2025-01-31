// Header.js

import React from "react";
import "./Header.css";
import smallLeft from "../../assets/icons/small-left.png";
import smallRight from "../../assets/icons/small-right.png";
import searchIcon from "../../assets/icons/search.png";

export default function Header({ handleSearchChange }) {
  return (
    <>
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="seta esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="seta direita" />
          </button>
        </div>
        <div className="header__search">
          <img src={searchIcon} alt="" />
          <input
            id="search-input"
            type="text"
            onChange={handleSearchChange}
            placeholder="O que você quer ouvir?"
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </>
  );
}
