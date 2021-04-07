import React from "react";
import * as S from "./ButtonStyles";

export const btnPadding = {
  sm: "6px 14px",
  md: "0.625em 1.688em",
  lg: "16px 26px",
};

export default function Button({
  children,
  to,
  padding,
  textSize,
  textWeight,
  color,
}) {
  return (
    <S.ButtonLink to={to} padding={padding} color={color}>
      {children}
    </S.ButtonLink>
  );
}
