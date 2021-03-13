import Footer from "@components/footer/footer";
import LandingNavigation from "@components/landingNavigation/landingNavigation";
import LazyLoadImages from "@components/lazyLoadImages/lazyLoadImages";
import Navbar from "@components/navbar/navbar";
import LandingBackground from "@images/backgrounds/landingbackground.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <div className="relative bg-black">
      <Navbar />
      <div className="pb-12">
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
