


import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="my-header">
      <div className="logo">

    <h3><NavLink to="/" className="logolink">Probin</NavLink></h3>
      </div>

      <nav>
        <div className="ham" onClick={toggle}>
          <h1 className="icon">
            <GiHamburgerMenu />
          </h1>
          <div className={`navs ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={toggle}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggle}>About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={toggle}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contacts" onClick={toggle}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <ul className="desktop-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
