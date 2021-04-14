import React from "react";
import * as S from "./AboutFeatureOneStyles";

export default function AboutFeatureOne() {
  return (
    <S.FeatureOne>
      <S.Section id="what_we_do">
        <S.Left>
          <S.TitleWrap>
            <S.Line />
            <S.Title>What we do.</S.Title>
          </S.TitleWrap>
        </S.Left>

        <S.Right>
          <S.BigText>
            We save students time and money by providing a network of relevant
            textbooks.
          </S.BigText>

          <S.Text>
            nextchapter is a start up company with the goal of solving the
            constent problem facing all university students. Where should I get
            my textbooks? The book store? Or look online for an indefinit amount
            time in the hopes I find the right textbook. We offer a network of
            university students just like you willing to sell or trade their
            textbooks to you. On your campus. At your convience.
          </S.Text>
        </S.Right>
      </S.Section>
    </S.FeatureOne>
  );
}
