import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Navbar = styled.div`
  max-height: 72px;
  box-shadow: 0px 4px 4px 0px #000000 25%;
  color: white;
  background-color: ${(props) => props.theme.gunpowderGray};
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
`;

export const NavLogo = styled(LinkR)`
  font-size: 20px;
  line-height: 24.38px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 3em;
  }
`;

export const NavLinkS = styled(LinkS)`
  text-decoration: none;
  font-size: 0.875rem; // 14px
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavLinkR = styled(LinkR)`
  text-decoration: none;
  font-size: 0.875rem; // 14px
  cursor: pointer;
  color: inherit;
`;
