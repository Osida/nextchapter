import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Btn, btnColor, Input } from "..";
import ROUTES from "../../pages";
import { db } from "../../database/firebaseConfig";
import { useAuth } from "../../context/AuthContext";
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
      let unsubscribe = await signUp(
        studentEmailRef.current.value,
        passwordRef.current.value
      );
      history.push(ROUTES.HOME);
      console.log("unsubscribe = ", unsubscribe);
      return unsubscribe;
    } catch (error) {
      setError("Failed to create a account");
    }
    setLoading(false);
  };

  const addUser = () => {
    console.log("newUser");
    db.collection("Students")
      .add({
        email: studentEmailRef.current.value,
        favorited_books: [],
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        password: passwordRef.current.value,
        phone_number: phoneNumberRef.current.value,
        student_id: "243",
        university: universityRef.current.value,
      })
      .then((docRef) => {
        console.log("Doc has been added: ", docRef);
      })
      .catch((error) => {
        console.log("Error adding doc: ", error);
      });
  };

  return (
    <>
      <S.SignUpContainer>
        <S.SignUpForm>
          {error && alert("Error")}
          {currentUser?.email && console.log("currentUser.email = ", currentUser?.email)}
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
                <Btn type="submit" {...btnColor.primary} onClick={addUser}>
                  Submit
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
