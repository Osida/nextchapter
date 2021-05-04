import React from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../pages";
import LinkBtn from "../button/LinkBtn";
import { btnColor } from "../button/LinkBtnData";
import * as S from "./NotFoundStyles";
import "./styles.css";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    // <S.NotFoundContainer>
    //   <S.NotFound>
    //     <h1>404 - Not Found!</h1>
    //     <p>No match for {pathname}</p>
    //     <Link to="/">Go Home</Link>
    //   </S.NotFound>
    // </S.NotFoundContainer>

    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, the page not found!</h2>
          <p>No match for {pathname}</p>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <LinkBtn to={ROUTES.HOME} {...btnColor.primary}>
            Back to homepage
          </LinkBtn>
        </div>
      </div>
    </>
  );
}
