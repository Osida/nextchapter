import { ButtonBase, InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import ROUTES from "../../pages";
import { Btn, btnColor, Input } from "../index";
import * as S from "../signUp/SignUpFormStyles";

export default function SignIn({ data }) {
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
                  {/* <Input
                    type={data.typeEmail}
                    placeholder={data.studentEmail}
                    ref={studentEmailRef}
                  /> */}
                  <TextField
                    variant="standard"
                    label="Display name"
                    name="displayName"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </S.FullInput>
                <S.FullInput>
                  {/* <Input
                    type={data.typePassword}
                    placeholder={data.password}
                    ref={passwordRef}
                  /> */}
                  <TextField
                    variant="standard"
                    label="Display name"
                    name="displayName"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </S.FullInput>
              </S.Row1>

              <S.BtnWrap>
                <ButtonBase>
                  <Btn type="submit" {...btnColor.primary}>
                    Sign In
                  </Btn>
                </ButtonBase>
              </S.BtnWrap>
            </S.Form>

            <S.ResetText to={ROUTES.RESET_PASSWORD}>
              {data.resetPassword}
            </S.ResetText>

            <S.Text>
              {data.text}
              <S.TextLink to={ROUTES.SIGN_UP}> {data.textLink}</S.TextLink>
            </S.Text>
          </S.SignUpRight>
        </S.SignUpForm>
      </S.SignUpContainer>
    </>
  );
}
