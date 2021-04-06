import React, { useState, useRef, forwardRef } from "react";
import { Btn, btnColor, btnSize, Input } from "..";
import { ROUTES } from "../../pages";
import * as S from "./SignUpFormStyles";
import { useAuth } from "../../context/AuthContext";
import { ContactSupportOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";

export default function SignUpForm({ data }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const universityRef = useRef();
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory()

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation(s)
    if (passwordRef.current.value < 8) {
      return setError("Password length is less than 8 characters");
    }

    try {
      setError("");
      setLoading(true);
      // async event
      await signUp(studentEmailRef.current.value, passwordRef.current.value);
      history.push(ROUTES.HOME)
    } catch (error) {
      setError("Failed to create a account");
    }
    setLoading(false);
  };

  return (
    <>
      <S.SignUpForm>
        {error && alert("Error")}
        {console.log("currentUser.email = ", currentUser?.email)}
        <S.SignUpLeft>
          <S.LinkWrap to={data.homeLinkTo}>{data.homeLinkText}</S.LinkWrap>
          <S.SignUpImage src={data.signUpImage} alt={data.signUpImageAlt} />
        </S.SignUpLeft>

        <S.SignUpRight>
          <S.Header>{data.headerText}</S.Header>

          <S.Form onSubmit={handleSubmit}>
            <S.Row2>
              <S.HalfInput>
                {/* <S.Icon /> */}
                <S.Span>
                  <Input
                    type={data.typeText}
                    placeholder={data.firstName}
                    ref={firstNameRef}
                  />
                </S.Span>
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
              {/* <Btn
                disabled={loading}
                color={{ ...btnColor.primary }}
                size={{ ...btnSize.md }}
                type="submit"
              >
                {data.btnText}
              </Btn> */}
              <button type="submit">Submit</button>
            </S.BtnWrap>
          </S.Form>

          <S.Text>
            {data.text}
            <S.TextLink to={ROUTES.SIGN_IN}> {data.textLink}</S.TextLink>
          </S.Text>
        </S.SignUpRight>
      </S.SignUpForm>
    </>
  );
}
