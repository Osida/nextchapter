import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Btn, btnColor, Input } from "..";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../database";
import ROUTES from "../../pages";
import * as S from "./SignUpFormStyles";

export default function SignUpForm({ data }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const universityRef = useRef();
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    // validation(s)
    if (passwordRef.current.value < 8) {
      return setError("Password length is less than 8 characters");
    }

    try {
      setError("");
      setLoading(true);
      let username = studentEmailRef.current.value.substring(0,studentEmailRef.current.value.indexOf("@"));
      let newUser = {
        email: studentEmailRef.current.value,
        password: passwordRef.current.value,
        favorite_books: [],
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        university: universityRef.current.value,
        username: username,
      };
      let newUserPublic = {
        email: studentEmailRef.current.value,
        favorite_books: [],
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        university: universityRef.current.value,
        username: username,
      };
      let newUserPrivate = {
        password: passwordRef.current.value,
      };
      // async event
      let unsubscribe = await signUp(newUser);
      history.push(ROUTES.HOME);
      // console.log("unsubscribe = ", unsubscribe);
      return unsubscribe;
    } catch (error) {
      setError("Failed to create a account = ", error);
      console.log("error = ", error);
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
              <S.Row2>
                <S.HalfInput>
                  <Input
                    type={data.typeText}
                    placeholder={data.firstName}
                    ref={firstNameRef}
                  />
                </S.HalfInput>
                <S.HalfInput>
                  <Input
                    type={data.typeText}
                    placeholder={data.lastName}
                    ref={lastNameRef}
                  />
                </S.HalfInput>
                <S.HalfInput>
                  <Input
                    type={data.typeTel}
                    placeholder={data.phoneNumber}
                    ref={phoneNumberRef}
                  />
                </S.HalfInput>
                <S.HalfInput>
                  <Input
                    type={data.typeText}
                    placeholder={data.university}
                    ref={universityRef}
                  />
                </S.HalfInput>
              </S.Row2>

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
                  Create account
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
