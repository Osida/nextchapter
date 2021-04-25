import React from "react";
import { signInData } from "../components";
import SignInForm from "../components/signInForm/SignInForm"

export default function SignIn() {
  return (
    <>
      <SignInForm data={signInData}></SignInForm>
    </>
  );
}
