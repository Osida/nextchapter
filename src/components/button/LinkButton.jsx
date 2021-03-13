import React from "react";
import * as S from "./LinkButtonStyles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export const linkBtnColors = {
  white: "white",
  black: "#black",
  gunpowderGray: "#303030",
  purpleGem: "#44318D",
  christmasPink: "#D83F87",
};

export default function ButtonLink({
  children,
  to,
  textSize,
  textWeight,
  textColor,
}) {
  return (
    <S.LinkBtnWrap textColor={textColor}>
      <S.LinkButton
        to={to}
        textColor={textColor}
        textSize={textSize}
        textWeight={textWeight}
      >
        {children}
      </S.LinkButton>
      <ArrowRightAltIcon />
    </S.LinkBtnWrap>
  );
}
