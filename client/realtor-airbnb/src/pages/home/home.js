import Footer from "@components/shared/footer/footer";
import LandingNavigation from "@components/shared/landingnavigation/landingNavigation";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import Navbar from "@components/shared/navbar/navbar";
import LandingBackground from "@images/backgrounds/landingbackground.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <div className="min-h-screen relative bg-primary">
      <div className="fixed w-full z-10">
        <Navbar />
        <LazyLoadImages
          src={LandingBackground}
          classNames="object-center object-cover w-full h-screen img-filter"
        />
        <LandingNavigation />
      </div>
      <Footer />
    </div>
  );
}
