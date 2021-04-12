import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

// CSS helper functions from styled components
export const linkHoverStyles = css`
  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.christmasPink};
    border-bottom: 3px solid ${({ theme }) => theme.christmasPink};
  }
`;

const mobileNavBar = css`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  max-height: 75px;
  /* padding: 15px 0; */
  padding: 0.8em 0;
  color: white;
  background: ${({ theme }) => theme.gunpowderGray};
  overflow: hidden;
  font-size: 14px;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const NavbarLogo = styled(LinkR)`
  font-size: 20px;
  font-weight: 400;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${mobileNavBar}
`;

export const NavbarItem = styled.li`
  & + & {
    margin-left: 65px;
  }

  transition: all 0.2s ease-in-out;

  ${linkHoverStyles}
`;

export const NavbarLinkS = styled(LinkS)``;

export const NavbarLinkR = styled(LinkR)``;

export const NavbarBtnWrap = styled.div`
  display: flex;
  align-items: center;

  ${mobileNavBar}
`;

export const NavbarTextLink = styled(LinkR)`
  transition: all 0.2s ease-in-out;

  ${linkHoverStyles}
`;

export const Divider = styled.span`
  margin: 0 20px;
`;

export const HamburgerWrap = styled.span`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ColorText = styled.span`
  color: ${(props) => (props ? props.theme.christmasPink : "black")};
`;
