import React from "react";
import { Container } from "../../styles/utilities";
import GitHubIcon from "@material-ui/icons/GitHub";
import * as S from "./FooterStyles";
import ROUTES from "../../pages";

const footerLinkSProps = {
  smooth: "true",
  duration: 500,
  spy: "true",
  exact: "true",
  offset: -80,
};

export default function Footer({ linkR, linkS }) {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <S.FooterTop>
            <S.Logo to={ROUTES.HOME}>N | nextchapter.</S.Logo>

            <S.FooterMenu>
              {Object.values(linkR).map((link, index) => (
                <S.FooterItem key={index}>
                  <S.FooterLinkR to={link.to}>{link.name}</S.FooterLinkR>
                </S.FooterItem>
              ))}

              {Object.values(linkS).map((link, index) => (
                <S.FooterItem key={index}>
                  <S.FooterLinkR to={link.to} {...footerLinkSProps}>
                    {link.name}
                  </S.FooterLinkR>
                </S.FooterItem>
              ))}
            </S.FooterMenu>
          </S.FooterTop>

          <S.Line />

          <S.FooterBottom>
            <S.CopyrightText>
              © 2020 nextchapter. All rights reserved
            </S.CopyrightText>

            <S.SocialLinks>
              <S.OutLink href="https://github.com/ewoods6/COSC484">
                <GitHubIcon />
              </S.OutLink>
            </S.SocialLinks>
          </S.FooterBottom>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
