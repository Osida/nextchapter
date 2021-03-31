import React from "react";
import * as S from "./BtnLinkStyles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function BtnLink({ children, color, size, to }) {
  return (
    <>
      <S.ButtonLink {...color} {...size} to={to}>
        <S.BtnLinkSpan>{children}</S.BtnLinkSpan>
        <ArrowRightAltIcon />
      </S.ButtonLink>
    </>
  );
}

export const color = {
  primary: {
    color: "#D83F87",
    bg: "white",
  },
  secondary: {
    color: "#44318D",
    bg: "white",
  },
  tertiary: {
    color: "#303030",
    bg: "white",
  },
  white: {
    color: "#fff",
    bg: "white",
  },
};

export const size = {
  sm: {},
  lg: {},
};
