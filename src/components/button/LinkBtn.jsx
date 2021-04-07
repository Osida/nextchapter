import React from "react";
import * as S from "./BtnStyles";

export default function LinkBtn({ children, ...props }) {
  return (
    <>
      <S.LinkBtn {...props}>{children}</S.LinkBtn>
    </>
  );
}
