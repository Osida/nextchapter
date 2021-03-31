import React from "react";
import { Navbar, home_signedOut, Hero, HomeFeature, Footer } from "../components";
import { featureOne, featureTwo } from "../components/feature/home/homeData";

export default function Home() {
  return (
    <div className="home">
      <Navbar
        linkR={{ ...home_signedOut.linkR }}
        linkS={{ ...home_signedOut.linkS }}
      />
      <Hero />
      <HomeFeature {...featureOne} />
      <HomeFeature {...featureTwo} />
      {/* <Footer /> */}
    </div>
  );
}
