import React from "react";
import * as S from "./BtnStyles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function LinkBtnArrow({ children, ...props }) {
  return (
    <>
      <S.LinkBtnArrow {...props}>
        <S.LinkBtnSpan>{children}</S.LinkBtnSpan>
        <ArrowRightAltIcon />
      </S.LinkBtnArrow>
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
