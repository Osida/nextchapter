import { Spin as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { btnColor, LinkBtn } from "..";
import { useAuth } from "../../context/AuthContext";
import { useStateValue } from "../../context/StateProvider";
import ROUTES from "../../pages";
import { Container } from "../../styles";
import * as S from "./NavbarStyles";

const SignedIn = ({ name }) => {
  return (
    <S.NavbarTextLink to={ROUTES.PROFILE}>
      Hello, <S.ColorText>{name}</S.ColorText>
    </S.NavbarTextLink>
  );
};

const SignedOut = () => {
  return <S.NavbarTextLink to={ROUTES.SIGN_IN}>Sign in</S.NavbarTextLink>;
};

export default function Navbar_({ linkR, linkS }) {
  const [{ user, student }, dispatch] = useStateValue();
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    if (user) {
      setError("");

      try {
        await signOut();
        history.push(ROUTES.HOME);
      } catch (error) {
        setError(error);
      }
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
            {user ? <SignedIn name={student?.username} /> : <SignedOut />}
            <S.Divider>|</S.Divider>
            <LinkBtn
              to={ROUTES.SIGN_UP}
              {...btnColor.primary}
              onClick={handleSignOut}
            >
              {user ? "Sign out" : "Sign up"}
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
