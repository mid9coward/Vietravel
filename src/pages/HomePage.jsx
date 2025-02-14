import React from "react";
import {
  About,
  FeaturedTours,
  Hero,
  PlacesToGo,
  Services,
  NewTours,
  Reviews,
  Promotion,
  Blogs,
  TravelTips,
  WhyUs,
  Contact,
  Galleries,
} from "../components";
import MapsDetail from "../components/MapDetails";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MapsDetail />
      <About />
      <Services />
      <FeaturedTours />
      <PlacesToGo />
      <NewTours />
      <Reviews />
      <Promotion />
      <Blogs />
      <TravelTips />
      <WhyUs />
      <Contact />
      <Galleries />
    </>
  );
};

export default HomePage;
