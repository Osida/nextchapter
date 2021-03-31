import React from "react";
import * as S from "./InputStyles";

export default function Input({ ...restProps }) {
  return (
    <>
      <S.Input {...restProps} />
    </>
  );
}
