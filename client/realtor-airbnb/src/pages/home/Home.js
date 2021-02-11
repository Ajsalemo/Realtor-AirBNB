import Footer from "@components/footer/footer";
import LandingNavigation from "@components/landingnavigation/landingnavigation";
import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";
import Navbar from "@components/navbar/navbar";
import LandingBackground from "@images/backgrounds/landingbackground.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <div className="relative bg-black">
      <Navbar />
      <LazyLoadImages
        src={LandingBackground}
        classNames="object-center object-cover w-full h-screen img-filter"
      />
      <LandingNavigation />
      <Footer classNames="bg-white h-12 fixed bottom-0 w-full" />
    </div>
  );
}
