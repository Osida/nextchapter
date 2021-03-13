import React from "react";
import { Navbar, Hero, HomeFeature, Footer } from "../components";
import { featureOne, featureTwo } from "../components/feature/homeData";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <HomeFeature {...featureOne} />
      <HomeFeature {...featureTwo} />
      <Footer />
    </div>
  );
}
