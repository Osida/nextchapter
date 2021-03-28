import React from "react";
import * as S from "./NavSideBarStyles";

export default function NavSideBar(props) {
  return (
    <S.Container isOpen={props.isOpen} onClick={props.toggleMobileMenu}>
      <S.Icon>
        <S.ClosedIcon />
      </S.Icon>
      <S.Wrapper>
        <S.Menu>
          <S.LinkScroll to="/about">About</S.LinkScroll>
          <S.LinkScroll to="access" onClick={props.toggleMobileMenu}>
            Access
          </S.LinkScroll>
          <S.LinkScroll to="messaging" onClick={props.toggleMobileMenu}>
            Messaging
          </S.LinkScroll>
        </S.Menu>

        <S.BtnWrap>
          <S.Route to="/signin">Sign In</S.Route>
        </S.BtnWrap>
      </S.Wrapper>
    </S.Container>
  );
}
