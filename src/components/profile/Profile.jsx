import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useRef, useState } from "react";
import { Btn, btnColor, Input, ProfileBanner } from "..";
import { useStateValue } from "../../context/StateProvider";
import ROUTES from "../../pages";
import * as S from "./ProfileStyles";

const AlertError = ({ title, message }) => (
  <Alert severity="error">
    <AlertTitle>{title}</AlertTitle>
    {message} — <strong>check it out!</strong>
  </Alert>
);

export default function Profile_() {
  const [{ student }, dispatch] = useStateValue();
  const [error, setError] = useState("");

  const displayNameRef = useRef();
  const universityRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setError("Passwords to not match");
        // <AlertError title="Mismatched passwords" message={error} />;
        console.log(error);
        setError("");
      }
    } catch (error) {
      setError(error);
      return <AlertError title="catch" message={error.message()} />;
    }
  };

  return (
    <>
      <S.Profile>
        <ProfileBanner />

        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>

        <S.ProfileForm onSubmit={handleUpdateProfile}>
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
                    placeholder={student?.username}
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>University</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={universityRef}
                    placeholder={student?.university}
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
                    placeholder={student?.firstName}
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Last Name</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="text"
                    ref={lastNameRef}
                    placeholder={student?.lastName}
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Email</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="email"
                    ref={emailRef}
                    placeholder={student?.email}
                  />
                </S.InputWrap>
              </S.ContentWrap>
              <S.ContentWrap>
                <S.InputLabel>Phone Number</S.InputLabel>
                <S.InputWrap>
                  <Input
                    type="tel"
                    ref={phoneNumberRef}
                    placeholder={student?.phoneNumber}
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
            <Btn to={ROUTES.SIGN_UP} type="Submit" {...btnColor.primary}>
              Save changes
            </Btn>

            <S.BtnDivider />

            <Btn to={ROUTES.SIGN_UP} type="Submit" {...btnColor.primary}>
              Delete account
            </Btn>
          </S.BtnRow>
        </S.ProfileForm>
      </S.Profile>
    </>
  );
}
