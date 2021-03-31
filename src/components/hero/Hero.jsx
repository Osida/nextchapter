import React from "react";
import { Btn, btnColor, btnSize } from "..";
import { ROUTES } from "../../pages";
import { Container } from "../../styles";
import * as S from "./HeroStyles";

const image = "/images/undraw_book_lover.svg";

export default function Hero() {
  return (
    <S.Hero>
      <Container>
        <S.HeroWrapper>
          <S.Content>
            <S.TextWrap>
              <S.HeroTitle>College book exchange made easy!</S.HeroTitle>
              <S.HeroSubTitle>
                One location for all of your course textbooks.
              </S.HeroSubTitle>
            </S.TextWrap>

            <Btn
              color={{ ...btnColor.primary }}
              size={{ ...btnSize.lg }}
              to={ROUTES.SIGN_IN}
            >
              Join Today
            </Btn>
          </S.Content>

          <S.ImageWrap>
            <S.HeroImage src={image} alt="Book Lover" />
          </S.ImageWrap>
        </S.HeroWrapper>
      </Container>
    </S.Hero>
  );
}
