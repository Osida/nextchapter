import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import ROUTES from "../../pages";
import { Btn, btnColor, Input } from "../index";
import * as S from "../signUp/SignUpFormStyles";

export default function SignIn({data}) {
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(studentEmailRef.current.value, passwordRef.current.value);
      history.push(ROUTES.HOME);
    } catch (error) {
      setError("Failed to create a account");
    }
    setLoading(false);
  };

  return (
    <>
      <S.SignUpContainer>
        <S.SignUpForm>
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
                <S.FullInput>
                  <Input
                    type={data.typePassword}
                    placeholder={data.password}
                    ref={passwordRef}
                  />
                </S.FullInput>
              </S.Row1>

              <S.BtnWrap>
                <Btn type="submit" {...btnColor.primary}>
                  Sign In
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
  )
}