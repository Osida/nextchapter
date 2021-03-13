import React from "react";
import { Button } from "react-scroll";
import { Container } from "../../styles/utilities";
import * as S from "./FeatureStyles";

export default function Feature(props) {
  return (
    <S.Feature bgColor={props.bgColor}>
      <Container>
        <S.Wrapper row={props.row}>
          <S.Content contentWidth={props.contentWidth}>
            <S.TopLine topLineColor={props.topLineColor}>
              {props.topLineText}
            </S.TopLine>

            <S.HeadLine headLineColor={props.headLineColor}>
              {props.headLineText}
            </S.HeadLine>

            <S.Description textColor={props.textColor}>
              {props.description}
            </S.Description>

            <h6 style={{ color: "black" }}>Get Started {">"}</h6>
          </S.Content>

          <S.ImageWrap imageWrapSize={props.imageWrapSize}>
            <S.Image src={props.image} alt={props.alt} />
          </S.ImageWrap>
        </S.Wrapper>
      </Container>
    </S.Feature>
  );
}
