import React from "react";
import { useHistory } from "react-router";
import { Btn, btnColor, btnSize } from "..";
import ROUTES from "../../pages";
import * as S from "../signUp/SignUpFormStyles";

export default function SignInForm({ x, data }) {
  const history = useHistory();
  // history.push(ROUTES.HOME)

  return (
    <>
      <S.SignUpForm>
        <S.SignUpLeft>
          <S.LinkWrap to={data.homeLinkTo}>{data.homeLinkText}</S.LinkWrap>
          <S.SignUpImage src={data.signInImage} alt={data.signInImageAlt} />
        </S.SignUpLeft>

        <S.SignUpRight>
          <S.Header>{data.headerText}</S.Header>

          {/* <S.Row1>
            {Object.values(x).map((item, index) => (
              <S.FullInput key={index}>
                <Input type={item.type} placeholder={item.placeholder} />
              </S.FullInput>
            ))}
          </S.Row1> */}

          <S.BtnWrap>
            <Btn color={{ ...btnColor.primary }} size={{ ...btnSize.md }}>
              {data.btnText}
            </Btn>
          </S.BtnWrap>

          <S.Text>
            {data.forgotText}
            <S.TextLink to={ROUTES.SIGN_IN}> {data.forgotLinkText}</S.TextLink>
          </S.Text>
        </S.SignUpRight>
      </S.SignUpForm>

      {/* <SignInForm FullInputData={x} data={signInData}></SignInForm> */}
    </>
  );
}
