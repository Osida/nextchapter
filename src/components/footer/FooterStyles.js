import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import * as Navbar from "../navbar/NavbarStyles";

export const Footer = styled.div`
  color: #d9dbe1;
  background-color: ${(props) => props.theme.gunpowderGray};
`;

export const Wrapper = styled.div`
  padding: 1em 0;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Navbar.NavbarLogo)`
  margin-top: 39px;
  margin-bottom: 39px;
`;

export const FooterMenu = styled(Navbar.NavbarMenu)`
  margin-bottom: 34px;
`;

export const FooterItem = styled(Navbar.NavbarItem)``;

export const FooterLinkS = styled(LinkS)`
  /* text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer; */
`;

export const FooterLinkR = styled(LinkR)``;

export const Line = styled.hr`
  width: 100%;
  opacity: 20%;
  border: 0.5px solid white;
  margin-bottom: 34px;
  transition: all 0.2s ease-in-out;
`;

export const CopyrightText = styled.div`
  font-size: 12px;
  line-height: 22px;
  transition: all 0.2s ease-in-out;
`;

export const SocialLinks = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const OutLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
