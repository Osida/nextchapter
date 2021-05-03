import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Btn, btnColor, btnSize, Input } from "..";
import ROUTES from "../../pages";
import * as S from "./SignUpFormStyles";
import { InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

export default function PasswordReset({ data }) {
  const studentEmailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      // async event
      await resetPassword(studentEmailRef.current.value);
      setMessage("Check you inbox for further instructions");
    } catch (error) {
      setError("Failed to send reset password");
    }
    setLoading(false);
  };

  return (
    <>
      <S.SignUpContainer>
        <S.SignUpForm>
          {message && console.log(message)}
          {message && alert(message)}
          <S.SignUpLeft>
            <S.LinkWrap to={ROUTES.HOME}>{data.homeLinkText}</S.LinkWrap>
            <S.SignUpImage src={data.signUpImage} alt={data.signUpImageAlt} />
          </S.SignUpLeft>

          <S.SignUpRight>
            <S.Header>{data.headerText}</S.Header>

            <S.Form onSubmit={handleSubmit}>
              <S.Row1>
                <S.FullInput>
                  <Input
                    type={data.typeEmail}
                    placeholder={data.studentEmail}
                    ref={studentEmailRef}
                  />
                </S.FullInput>
              </S.Row1>

              <S.BtnWrap>
                <Btn type="submit" {...btnColor.primary}>
                  Reset Password
                </Btn>
              </S.BtnWrap>
            </S.Form>

            <S.Text>
              {data.text}
              <S.TextLink to={ROUTES.SIGN_IN}> {data.textLink}</S.TextLink>
            </S.Text>
          </S.SignUpRight>
        </S.SignUpForm>
      </S.SignUpContainer>
    </>
  );
}
