import { AboutSection } from "../components/AboutSection";
import Hero from "../components/Hero";
import MastersSection from "../components/MastersSection";
import Testimonial from "../components/Testimonial";
import VideoSection from "../components/VideoSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection/>
      <MastersSection />
      <VideoSection/>
      <Testimonial/>
    </div>
  );
};

export default Home;
