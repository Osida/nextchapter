import React, { useState } from "react";
import { Btn, btnColor, btnSize, Input } from "..";
import { ROUTES } from "../../pages";
import PersonIcon from "@material-ui/icons/Person";
import * as S from "./SignUpFormStyles";

export default function SignUpForm({ data }) {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    university: "",
    student_email: "",
    password: "",
  });

  const createUser = () => {};

  return (
    <>
      <S.SignUpForm>
        <S.SignUpLeft>
          <S.LinkWrap to={data.homeLinkTo}>{data.homeLinkText}</S.LinkWrap>
          <S.SignUpImage src={data.signUpImage} alt={data.signUpImageAlt} />
        </S.SignUpLeft>

        <S.SignUpRight>
          <S.Header>{data.headerText}</S.Header>

          <S.Row2>
            <S.HalfInput>
              <S.Icon />
              <S.Span>
                <Input type={data.typeText} placeholder={data.firstName} />
              </S.Span>
            </S.HalfInput>
            <S.HalfInput>
              <Input type={data.typeText} placeholder={data.lastName} />
            </S.HalfInput>
            <S.HalfInput>
              <Input type={data.typeTel} placeholder={data.phoneNumber} />
            </S.HalfInput>
            <S.HalfInput>
              <Input type={data.typeText} placeholder={data.university} />
            </S.HalfInput>
          </S.Row2>

          <S.Row1>
            <S.FullInput>
              <Input type={data.typeEmail} placeholder={data.studentEmail} />
            </S.FullInput>
            <S.FullInput>
              <Input type={data.typePassword} placeholder={data.password} />
            </S.FullInput>
          </S.Row1>

          <S.BtnWrap>
            <Btn color={{ ...btnColor.primary }} size={{ ...btnSize.md }}>
              {data.btnText}
            </Btn>
          </S.BtnWrap>

          <S.Text>
            {data.text}
            <S.TextLink to={ROUTES.SIGN_IN}> {data.textLink}</S.TextLink>
          </S.Text>
        </S.SignUpRight>
      </S.SignUpForm>
    </>
  );
}
