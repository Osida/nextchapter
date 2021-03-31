import React, { useState } from "react";
import { ROUTES } from "../../pages";
import Btn, { color, size } from "../button/Btn";
import { Spin as Hamburger } from "hamburger-react";
import * as S from "./NavbarStyles";
import { Container } from "../../styles";

export default function Navbar_({ linkR, linkS }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Navbar>
      <Container>
        <S.NavbarContent>
          <S.NavbarLogo to={ROUTES.HOME}>N | nextchapter.</S.NavbarLogo>

          <S.NavbarMenu>
            {Object.values(linkR).map((link, index) => (
              <S.NavbarItem key={index}>
                <S.NavbarLinkR to={link.to}>{link.name}</S.NavbarLinkR>
              </S.NavbarItem>
            ))}

            {Object.values(linkS).map((link, index) => (
              <S.NavbarItem key={index}>
                <S.NavbarLinkS to={link.to} {...link.restProps}>
                  {link.name}
                </S.NavbarLinkS>
              </S.NavbarItem>
            ))}
          </S.NavbarMenu>

          <S.NavbarBtnWrap>
            <S.NavbarTextLink to={ROUTES.SIGN_IN}>Sign in</S.NavbarTextLink>
            <S.Divider>|</S.Divider>
            <Btn to={ROUTES.SIGN_UP} color={{ ...color.primary }}>
              Sign up
            </Btn>
          </S.NavbarBtnWrap>

          <S.HamburgerWrap>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </S.HamburgerWrap>
        </S.NavbarContent>
      </Container>
    </S.Navbar>
  );
}
