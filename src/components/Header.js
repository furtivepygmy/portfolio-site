import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink exact activeClassName="is-active" to="/">
      Home
    </NavLink>
    <NavLink exact activeClassName="is-active" to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink activeClassName="is-active" to="/contact">
      Contact
    </NavLink>
  </header>
);

export default Header;
