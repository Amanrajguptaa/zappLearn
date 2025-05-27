import { AboutSection } from "../components/AboutSection";
import Hero from "../components/Hero";
import MastersSection from "../components/MastersSection";
import Testimonial from "../components/Testimonial";
import VideoSection from "../components/VideoSection";
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
const Home = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <AboutSection/>
      <MastersSection />
      <VideoSection/>
      <Testimonial/>
      <HowItWorks/>
    </div>
  );
};

export default Home;
