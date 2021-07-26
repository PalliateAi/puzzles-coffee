import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {/* <SidebarMenu>
        <SidebarLink to="/">Coffees</SidebarLink>
        <SidebarLink to="/">Item 1</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu> */}
      <SideBtnWrap>
        <SidebarRoute
          to={
            "//wa.me/601127064107?text=I'm%20interested%20in%20Puzzles%20Coffeee"
          }
          aria-label="Order Via Web"
          target="_blank"
        >
          Place Order
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
