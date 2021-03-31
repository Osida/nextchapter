import React, { useState, useRef, forwardRef } from "react";
import { Btn, btnColor, btnSize, Input } from "..";
import { ROUTES } from "../../pages";
import * as S from "./SignUpFormStyles";
import { useAuth } from "../../context/AuthContext";

export default function SignUpForm({ data }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const universityRef = useRef();
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit");
    console.log(firstNameRef);

    // validation(s)
    // if (passwordRef.current.value > 8) {
    //   return setError("Password length is less than 8 characters");
    // }

    try {
      setError("");
      setLoading(true);
      // async event
      signUp(studentEmailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Failed to create a account");
    }
    setLoading(false);
  };

  // const [student, setStudent] = useState({
  //   first_name: "",
  //   last_name: "",
  //   phone_number: "",
  //   university: "",
  //   student_email: "",
  //   password: "",
  // });

  // const createUser = () => {};

  return (
    <>

      <S.SignUpForm>
        {error && alert("Error")}
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
              <Btn
                disabled={loading}
                color={{ ...btnColor.primary }}
                size={{ ...btnSize.md }}
                type="submit"
              >
                {data.btnText}
              </Btn>
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
