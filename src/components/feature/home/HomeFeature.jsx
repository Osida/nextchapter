import React from "react";
import ROUTES from "../../../pages";
import { Container } from "../../../styles";
import { LinkBtnArrow } from "../../index";
import * as S from "./HomeFeatureStyles";

export default function HomeFeature(props) {
  return (
    <S.Feature bgColor={props.bgColor} id={props.id}>
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

            <LinkBtnArrow to={ROUTES.SIGN_IN} {...props.btnLinkColor}>
              {props.btnLinkText}
            </LinkBtnArrow>
          </S.Content>

          <S.ImageWrap imageWrapSize={props.imageWrapSize}>
            <S.Image src={props.image} alt={props.alt} />
          </S.ImageWrap>
        </S.Wrapper>
      </Container>
    </S.Feature>
  );
}
