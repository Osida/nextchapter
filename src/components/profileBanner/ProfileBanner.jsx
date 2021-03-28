import React from "react";
import { Container } from "../../styles/utilities";
import * as S from "./ProfileBannerStyles";

export default function ProfileBanner() {
  return (
    <S.ProfileBanner>
      <Container>
        <S.Wrapper>
          <S.Content>
            <S.Title>
              Hi, <S.ColorText>User</S.ColorText>
            </S.Title>
            <S.SubTitle>Welcome back!</S.SubTitle>
          </S.Content>

          <S.ImageWrap>
            <S.Image src="/images/undraw_personal_settings.svg" />
          </S.ImageWrap>
        </S.Wrapper>
      </Container>
    </S.ProfileBanner>
  );
}
