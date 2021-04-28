import React, { forwardRef } from "react";
import * as S from "./InputStyles";

function Input(props, ref) {
  return (
    <>
      <S.Input {...props} ref={ref} />
    </>
  );
}

export default forwardRef(Input);