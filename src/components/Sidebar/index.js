import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick ={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="lighting" onClick={toggle}>
            Lighting
          </SidebarLink>
          <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
            Email Us
          </SidebarRoute>
        </SideBtnWrap>
        </SidebarMenu>
       
      </SidebarWrapper>
    </SidebarContainer>
  );
}
;

export default Sidebar;
