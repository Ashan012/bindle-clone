import React from "react";
import "./App.css";
import {
  AboutUs,
  Features,
  Hero,
  HowToInstall,
  Testimonials,
  DonateSection,
  Footer,
} from "./Components";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <HowToInstall />
      <DonateSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
