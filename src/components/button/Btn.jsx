import React from "react";
import * as S from "./BtnStyles";

export default function Btn({ children, color, size, to }) {
  return (
    <>
      <S.Button to={to} {...color} {...size}>
        {children}
      </S.Button>
    </>
  );
}

export const color = {
  primary: {
    bg: "#D83F87",
    color: "white",
  },
  secondary: {
    bg: "#44318D",
    color: "white",
  },
  tertiary: {
    bg: "#303030",
    color: "white",
  },
};

export const size = {
  sm: {
    max_width: "81px",
    max_height: "28px",
    padding: "6px 14px",
    border_radius: "8px",
    font_size: "12px",
    font_weight: "700",
  },
  lg: {
    max_width: "140px",
    max_height: "62px",
    padding: "16px 26px",
    border_radius: "8px",
    font_size: "20px",
    font_weight: "700",
  },
};
