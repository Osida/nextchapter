import React from "react";
import * as S from "./SloganStyles";
import { Container } from "../../styles/utilities";

export default function Slogan() {
  return (
    <S.Slogan>
      <Container>
        <S.Wrapper>
          <S.Title>
            Directly connecting you with the Textbooks you need!
          </S.Title>
        </S.Wrapper>
      </Container>
    </S.Slogan>
  );
}
