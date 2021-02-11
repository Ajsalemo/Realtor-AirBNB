import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";
import ApartmentBackgroundImageTwo from "@images/backgrounds/apt1.jpg";
import HomeBackgroundImageOne from "@images/backgrounds/home1.jpg";
import HomeBackgroundImageTwo from "@images/backgrounds/home2.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <Carousel
      autoPlay={8000}
      animationSpeed={4000}
      infinite
      className="bg-black"
    >
      <LazyLoadImages src={HomeBackgroundImageOne} />
      <LazyLoadImages src={HomeBackgroundImageTwo} />
      <LazyLoadImages src={ApartmentBackgroundImageTwo} />
    </Carousel>
  );
}
