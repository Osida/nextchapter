import React, { useState } from "react";
import * as S from "./Navstyles.js";

export default function Nav(props) {
  const [navbar, setNavBar] = useState(false);

  const changeBg = () => {
    console.log(window.screenY);
    if (window.screenY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <S.Nav navbar={navbar}>
        <S.NavLink to="/">
          <h1>N | nextchapter</h1>
        </S.NavLink>

        <S.Bars onClick={props.toggleMobileMenu} />

        <S.NavMenu>
          <S.NavLink to="/about" activeStyle>
            About
          </S.NavLink>
          <S.NavLink to="/access" activeStyle>
            Access
          </S.NavLink>
          <S.NavLink to="/messages" activeStyle>
            Messages
          </S.NavLink>
        </S.NavMenu>

        <S.NavBtn>
          <S.NavBtnLink to="/signin">Sign In</S.NavBtnLink>
        </S.NavBtn>
      </S.Nav>
    </>
  );
}
