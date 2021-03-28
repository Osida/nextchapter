import React from "react";
import * as S from "./InputStyles";

export default function Input(props) {
  return (
    <S.Input type={props.type} placeholder={props.placeholder} id={props.id} />
  );
}
