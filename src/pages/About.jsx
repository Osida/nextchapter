import React from "react";
import {
  Navbar,
  Slogan,
  Footer,
  about_signedOut,
  signedIn,
} from "../components";
import AboutFeatureOne from "../components/feature/about/AboutFeatureOne";
import AboutFeatureTwo from "../components/feature/about/AboutFeatureTwo";
import { useStateValue } from "../context/StateProvider";

const NavBarSignedIn = () => (
  <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
);

const NavBarSignedOut = () => (
  <Navbar
    linkR={{ ...about_signedOut.linkR }}
    linkS={{ ...about_signedOut.linkS }}
  />
);

export default function About() {
  const [{ user }] = useStateValue();

  return (
    <div className="about">
      {user ? <NavBarSignedIn /> : <NavBarSignedOut />}
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
