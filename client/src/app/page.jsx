import About from "@/components/core/home/about";
import PreWork from "@/components/core/home/HowWeWork";
import LatestShot from "@/components/core/home/LatestShot";
import Services from "@/components/core/home/Service";
import Slider from "@/components/core/home/Slider";
import ContactPage from "./contact/page";
import VideoGallery from "@/components/core/gallery/VideoGallery";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Services />
      <VideoGallery />
      <About />
      <PreWork />
      <LatestShot />
      <ContactPage />
      <br />
    </div>
  );
};

export default HomePage;
