import React from "react";
import { Navbar, Slogan, Footer, about_signedOut } from "../components";

export default function About() {
  return (
    <div className="about">
      <Navbar
        linkR={{ ...about_signedOut.linkR }}
        linkS={{ ...about_signedOut.linkS }}
      />
      <Slogan />
      {/* <Footer /> */}
    </div>
  );
}
