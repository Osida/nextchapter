import React, { useState } from "react";
import { SignUp } from ".";
import { Input, SignUpForm } from "../components";
import SignInForm from "../components/signUp/SignInForm";
import {
  FullInputData as x,
  signInData,
} from "../components/signUp/signInData";
import {
  FullInputData,
  halfInputData,
  signUpData,
} from "../components/signUp/signUpData";
import SignIn from "./SignIn";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <NavSideBar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Nav toggleMobileMenu={toggleMobileMenu} /> */}
      {/* <Navbar_
        linkR={{ ...about_signedOut.linkR }}
        linkS={{ ...about_signedOut.linkS }}
      /> */}
      {/* <MobileNavbar /> */}
      {/* <Btn color={{ ...color.primary }} size={{ ...size.md }}>
        Sign In
      </Btn> */}
      {/* <BtnLink color={{ ...btnLinkColor.primary }}>Sign In</BtnLink> */}
      {/* <Input /> */}
      <SignUpForm
        // halfInputData={halfInputData}
        // FullInputData={FullInputData}
        data={signUpData}
      ></SignUpForm>

      {/* <SignInForm FullInputData={x} data={signInData}></SignInForm> */}
    </>
  );
}
