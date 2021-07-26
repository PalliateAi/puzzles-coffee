import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";

export const Nav = styled.nav`
  background: #fff;
  height: 85px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const Navlogo = styled.img`
  margin-right: auto;
  height: 75px;
  margin-top: 5px;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000;
  padding-top: 0.75rem;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(SiCoffeescript)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
