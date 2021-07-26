import React from "react";
import { Bars, Nav, NavIcon, NavLink, Navlogo } from "./NavbarElements";
import Logo from "../../images/logo.jpeg";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Navlogo src={Logo} />
        {/* <NavLink to="/">Puzzles Coffee</NavLink> */}
        <NavIcon onClick={toggle}>
          <p>Order</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
