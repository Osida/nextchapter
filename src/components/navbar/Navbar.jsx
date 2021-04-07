import React, { useState } from "react";
import ROUTES from "../../pages";
import { LinkBtn, btnColor } from "..";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";
import { Spin as Hamburger } from "hamburger-react";
import { Container } from "../../styles";
import * as S from "./NavbarStyles";

export default function Navbar_({ linkR, linkS }) {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signOut, currentUser } = useAuth();
  const history = useHistory();

  // sign out
  const handleSignOut = async () => {
    setError("");

    try {
      await signOut();
      history.pushState("/signin");
    } catch (error) {
      setError("");
    }
  };

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
            <LinkBtn to={ROUTES.SIGN_UP} color={{ ...btnColor.primary }}>
              Sign up
            </LinkBtn>
          </S.NavbarBtnWrap>

          <S.HamburgerWrap>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </S.HamburgerWrap>
        </S.NavbarContent>
      </Container>
    </S.Navbar>
  );
}
