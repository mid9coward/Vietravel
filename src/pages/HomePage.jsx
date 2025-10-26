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
import Chatbot from "../components/Chatbot";

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
      <Chatbot />
    </>
  );
};

export default HomePage;
