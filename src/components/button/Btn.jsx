import React from "react";
import * as S from "./BtnStyles";

export default function Btn({ children, ...props }) {
  return (
    <>
      <S.Button {...props}>{children}</S.Button>
    </>
  );
}
