import React, { useRef } from "react";
import Footer from "../footer/Footer";
import { Input } from "..";
import { home_signedOut } from "../navbar/navbarData";
import { Navbar } from "../navbar/NavbarStyles";
import ProfileBanner from "./profileBanner/ProfileBanner";
import * as S from "./ProfileStyles_";
import Btn, { color } from "../button/Btn";
import { ROUTES } from "../../pages";

export default function Profile_() {
  const displayNameRef = useRef();
  const universityRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <S.Profile>
        <ProfileBanner />

        <S.ProfileForm>
          <S.Row>
            <S.RowLeft>
              <S.Header>
                User Profile <S.IconUser />
              </S.Header>
              <S.Description>
                Your user profile information will be shown to other users.
              </S.Description>
            </S.RowLeft>

            <S.RowRight>
              <S.ContentWrap>
                <S.InputLabel>Display Name</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={displayNameRef}
                    placeholder="Username"
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>University</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={universityRef}
                    placeholder="Towson University"
                  />
                </S.InputWrap>
              </S.ContentWrap>
            </S.RowRight>
          </S.Row>

          <S.Divider />

          <S.Row>
            <S.RowLeft>
              <S.Header>
                Personal Details <S.IconLock />
              </S.Header>
              <S.Description>
                Your personal information is never shown to other users.
              </S.Description>
            </S.RowLeft>

            <S.RowRight>
              <S.ContentWrap>
                <S.InputLabel>First Name</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={firstNameRef}
                    placeholder="First Name"
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Last Name</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={lastNameRef}
                    placeholder="Last Name"
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Email</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="email"
                    ref={emailRef}
                    placeholder="user@students.towson.edu"
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Phone Number</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="tel"
                    ref={phoneNumberRef}
                    placeholder="243-789-2234"
                  />
                </S.InputWrap>
              </S.ContentWrap>
            </S.RowRight>
          </S.Row>

          <S.Divider />

          <S.Row>
            <S.RowLeft>
              <S.Header>
                Password <S.IconKey />
              </S.Header>
              <S.Description>
                Leave password blank if you don’t want to change.
              </S.Description>
            </S.RowLeft>

            <S.RowRight>
              <S.ContentWrap>
                <S.InputLabel>New Password</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="password"
                    ref={passwordRef}
                    placeholder="New Password"
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Confirm Password</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="password"
                    ref={confirmPasswordRef}
                    placeholder="Confirm Password"
                  />
                </S.InputWrap>
              </S.ContentWrap>
            </S.RowRight>
          </S.Row>

          <S.Divider />

          <S.BtnRow>
            <Btn to={ROUTES.SIGN_UP} color={{ ...color.primary }}>
              Save changes
            </Btn>

            <S.BtnDivider />

            <Btn to={ROUTES.SIGN_UP} color={{ ...color.primary }}>
              Delete account
            </Btn>
          </S.BtnRow>
        </S.ProfileForm>
      </S.Profile>
    </>
  );
}
