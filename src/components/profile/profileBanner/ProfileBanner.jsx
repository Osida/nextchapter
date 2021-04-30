import React from "react";
import { useStateValue } from "../../../context/StateProvider";
import { Container } from "../../../styles";
import * as S from "./ProfileBannerStyles";

const SignedIn = ({ name }) => {
  return (
    <S.Title>
      Hi, <S.ColorText>{name ? name : "user"}</S.ColorText>
    </S.Title>
  );
};

const SignedOut = () => {
  return (
    <S.Title>
      Hi, <S.ColorText>User</S.ColorText>
    </S.Title>
  );
};

export default function ProfileBanner() {
  const [{ user, student }, dispatch] = useStateValue();

  return (
    <S.ProfileBanner>
      <Container>
        <S.Wrapper>
          <S.Content>
            {user ? <SignedIn name={student?.username} /> : <SignedOut />}
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
