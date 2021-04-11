import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./NotFoundStyles";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <S.NotFoundContainer>
      <S.NotFound>
        <h1>404 - Not Found!</h1>
        <p>No match for {pathname}</p>
        <Link to="/">Go Home</Link>
      </S.NotFound>
    </S.NotFoundContainer>
  );
}
