import React from "react";
import { Container } from "../../styles/utilities";
import GitHubIcon from "@material-ui/icons/GitHub";
import * as S from "./FooterStyles";
import { featureOne, featureTwo } from "../feature/homeData";
import { ROUTES } from "../../pages";

const footerLinkSProps = {
  smooth: true,
  duration: 500,
  spy: true,
  exact: "true",
  offset: -80,
};

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <S.FooterTop>
            <S.Logo to={ROUTES.HOME}>N | nextchapter.</S.Logo>

            <S.FooterMenu>
              <S.FooterItem>
                <S.FooterLinkR to={ROUTES.ABOUT}>About</S.FooterLinkR>
              </S.FooterItem>
              <S.FooterItem>
                <S.FooterLinkS to={featureOne.id} {...footerLinkSProps}>
                  Access
                </S.FooterLinkS>
              </S.FooterItem>
              <S.FooterItem>
                <S.FooterLinkS to={featureTwo.id} {...footerLinkSProps}>
                  Messaging
                </S.FooterLinkS>
              </S.FooterItem>
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
