import React from "react";
import * as S from "./AboutFeatureTwoStyles";

export default function AboutFeatureTwo() {
  return (
    <S.FeatureOne>
      <S.Section>
        <S.Left>
          <S.TitleWrap>
            <S.Line />
            <S.Title>How we do it.</S.Title>
          </S.TitleWrap>
        </S.Left>

        <S.Right>
          <S.Group>
            <S.Header>network of students</S.Header>
            <S.Text>
              The nextchapter web app connects students on your campus who needs
              wants to sell the textbooks.
            </S.Text>
          </S.Group>

          <S.Group>
            <S.Header>Buy textbooks</S.Header>
            <S.Text>
              Search through our catolog of textbooks and purchase the one(s)
              you need from another student.
            </S.Text>
          </S.Group>
          <S.Group>
            <S.Header>Sell textbooks</S.Header>
            <S.Text>Sell your old textbooks to other students.</S.Text>
          </S.Group>
          <S.Group>
            <S.Header>Exchange textbooks</S.Header>
            <S.Text>
              Direct communication to decied an on-campus location and time to
              perform the book exchange.
            </S.Text>
          </S.Group>
          <S.Group>
            <S.Header>Direct Messaging</S.Header>
            <S.Text>
              Directly connect with the student seller and decide on the terms
              of the exchange.
            </S.Text>
          </S.Group>
        </S.Right>
      </S.Section>
    </S.FeatureOne>
  );
}
