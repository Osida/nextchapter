import React from 'react';
import * as S from './NavbarStyles';
import { Container } from '../../styles/utilities';
import { ButtonLink, btnPadding } from '..';
import { ROUTES } from '../../pages';
import { featureOne, featureTwo } from '../feature/homeData';

const navLinkSProps = {
  smooth: true,
  duration: 500,
  spy: true,
  exact: 'true',
  offset: -80,
};

export default function Navbar() {
  return (
    <S.Navbar>
      <Container>
        <S.NavWrapper>
          <S.NavLogo to={ROUTES.HOME}>N | nextchapter.</S.NavLogo>
          <S.NavMenu>
            <S.NavItem>
              <S.NavLinkR to={ROUTES.ABOUT}>About</S.NavLinkR>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkS to={featureOne.id} {...navLinkSProps}>
                Access
              </S.NavLinkS>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkS to={featureTwo.id} {...navLinkSProps}>
                Messaging
              </S.NavLinkS>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkR to={ROUTES.SELL}>Sell</S.NavLinkR>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkR to={ROUTES.BUY}>Buy</S.NavLinkR>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkR to={ROUTES.TRADE}>Trade</S.NavLinkR>
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
