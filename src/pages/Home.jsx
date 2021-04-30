import React from "react";
import {
  Navbar,
  home_signedOut,
  Hero,
  HomeFeature,
  Footer,
  signedIn,
} from "../components";
import { featureOne, featureTwo } from "../components/feature/home/homeData";
import { useStateValue } from "../context/StateProvider";

const NavBarSignedIn = () => (
  <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
);

const NavBarSignedOut = () => (
  <Navbar
    linkR={{ ...home_signedOut.linkR }}
    linkS={{ ...home_signedOut.linkS }}
  />
);

export default function Home() {
  const [{ user }] = useStateValue();

  return (
    <div className="home">
      {user ? <NavBarSignedIn /> : <NavBarSignedOut />}
      <Hero />
      <HomeFeature {...featureOne} />
      <HomeFeature {...featureTwo} />
      <Footer
        linkR={{ ...home_signedOut.linkR }}
        linkS={{ ...home_signedOut.linkS }}
      />
    </div>
  );
}
