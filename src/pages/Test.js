import React, { useState } from "react";
import { Navbar } from "../components";
import Btn, { color, size } from "../components/button/Btn";
import BtnLink, {
  color as btnLinkColor,
  size as btnLinkSize,
} from "../components/button/BtnLink";
import Button from "../components/button/Button";
import Nav from "../components/nav/Nav";
import NavSideBar from "../components/nav/NavSideBar";
import { home_signedOut } from "../components/navbar/navbarData";
import Navbar_ from "../components/navbar/Navbar_";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <NavSideBar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Nav toggleMobileMenu={toggleMobileMenu} /> */}
      <Navbar_
        linkR={{ ...home_signedOut.linkR }}
        linkS={{ ...home_signedOut.linkS }}
      />
      {/* <Btn color={{ ...color.primary }} size={{ ...size.md }}>
        Sign In
      </Btn> */}
      {/* <BtnLink color={{ ...btnLinkColor.primary }}>Sign In</BtnLink> */}
    </>
  );
}
