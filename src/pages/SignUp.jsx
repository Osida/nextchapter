import React from "react";
import { SignUpForm } from "../components";
import { signUpData } from "../components/signUp/signUpData";

export default function SignUp() {
  return (
    <>
      <SignUpForm data={signUpData}></SignUpForm>
    </>
  );
}
