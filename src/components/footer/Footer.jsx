import React from "react";
import { Container } from "../../styles/utilities";
import GitHubIcon from "@material-ui/icons/GitHub";
import * as S from "./FooterStyles";

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <S.FooterTop>
            <S.Logo>N | nextchapter.</S.Logo>

            <S.FooterMenu>
              <S.FooterItem>
                <S.FooterLink>About</S.FooterLink>
              </S.FooterItem>
              <S.FooterItem>
                <S.FooterLink>Access</S.FooterLink>
              </S.FooterItem>
              <S.FooterItem>
                <S.FooterLink>Messaging</S.FooterLink>
              </S.FooterItem>
            </S.FooterMenu>
          </S.FooterTop>

          <S.Line />

          <S.FooterBottom>
            <S.CopyrightText>
              © 2020 nextchapter. All rights reserved
            </S.CopyrightText>

            <S.SocialLinks>
              <GitHubIcon />
            </S.SocialLinks>
          </S.FooterBottom>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
