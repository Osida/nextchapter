import React from "react";
import { Navbar, Hero, Feature, Footer } from "../components";
import { featureOne, featureTwo } from "../components/feature/data";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Feature {...featureOne} />
      <Feature {...featureTwo} />
      <Footer />
    </div>
  );
}
