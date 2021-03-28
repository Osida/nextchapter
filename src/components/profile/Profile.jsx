import React from "react";
import { Container } from "../../styles/utilities";
import * as S from "./ProfileStyles";
import { ProfileBanner, Input, ButtonLink, btnPadding } from "..";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export default function Profile() {
  return (
    <S.Profile>
      <ProfileBanner />
      <Container>
        <S.ProfileForm>
          <S.Wrapper>
            <S.ProfileLeft>
              <S.TextWrap>
                <S.Header>User Profile</S.Header>
                <AccountCircleIcon />
              </S.TextWrap>
              <S.Description>
                Your user profile information will be shown to other users
              </S.Description>
            </S.ProfileLeft>

            <S.ProfileRight>
              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>

              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>
            </S.ProfileRight>
          </S.Wrapper>

          <S.Divider />

          <S.Wrapper>
            <S.ProfileLeft>
              <S.TextWrap>
                <S.Header>User Profile</S.Header>
                <AccountCircleIcon />
              </S.TextWrap>
              <S.Description>
                Your user profile information will be shown to other users
              </S.Description>
            </S.ProfileLeft>

            <S.ProfileRight>
              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>

              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>
            </S.ProfileRight>
          </S.Wrapper>

          <S.Divider />

          <S.Wrapper>
            <S.ProfileLeft>
              <S.TextWrap>
                <S.Header>User Profile</S.Header>
                <AccountCircleIcon />
              </S.TextWrap>
              <S.Description>
                Your user profile information will be shown to other users
              </S.Description>
            </S.ProfileLeft>

            <S.ProfileRight>
              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>

              <S.InputWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <Input type="text" placeholder="Username" />
              </S.InputWrap>
            </S.ProfileRight>
          </S.Wrapper>

          <S.Divider />

          <S.BtnWrap>
            <ButtonLink padding={btnPadding.sm}>Save changes</ButtonLink>
            <ButtonLink padding={btnPadding.sm}>Delete account</ButtonLink>
          </S.BtnWrap>
        </S.ProfileForm>
      </Container>
    </S.Profile>
  );
}
