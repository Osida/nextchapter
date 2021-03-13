import React from "react";
import * as S from "./NavbarStyles";
import { Container } from "../../styles/utilities";
import { ButtonLink, btnPadding } from "..";
import { ROUTES } from "../../pages";

const navLinkProps = {
  smooth: true,
  duration: 500,
  spy: true,
  exact: "true",
  offset: -80,
};

export default function Navbar() {
  return (
    <S.Navbar>
      <Container>
        <S.NavWrapper>
          <S.NavLogo>N | nextchapter</S.NavLogo>

          <S.NavMenu>
            <S.NavItem>
              <S.NavLink to={ROUTES.ABOUT} {...navLinkProps}>
                About
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                to="access"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Access
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                to="messages"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Messaging
              </S.NavLink>
            </S.NavItem>
          </S.NavMenu>

          <ButtonLink to={ROUTES.SIGN_IN} padding={btnPadding.md}>
            Sign in
          </ButtonLink>
        </S.NavWrapper>
      </Container>
    </S.Navbar>
  );
}
