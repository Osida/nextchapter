import React from "react";
import { Navbar, Slogan, Footer, about_signedOut } from "../components";
import AboutFeatureOne from "../components/feature/about/AboutFeatureOne";
import AboutFeatureTwo from "../components/feature/about/AboutFeatureTwo";

export default function About() {
  return (
    <div className="about">
      <Navbar
        linkR={{ ...about_signedOut.linkR }}
        linkS={{ ...about_signedOut.linkS }}
      />
      <Slogan />
      <AboutFeatureOne />
      <AboutFeatureTwo />
      <Footer
        linkR={{ ...about_signedOut.linkR }}
        linkS={{ ...about_signedOut.linkS }}
      />
    </div>
  );
}
