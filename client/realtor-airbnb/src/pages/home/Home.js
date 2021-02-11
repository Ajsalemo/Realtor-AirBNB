import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";
import LandingBackground from "@images/backgrounds/landingbackground.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <LazyLoadImages
      src={LandingBackground}
      classNames="object-center object-cover w-full h-screen"
    />
  );
}
