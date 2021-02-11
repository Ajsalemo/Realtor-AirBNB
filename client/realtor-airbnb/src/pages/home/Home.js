import HomeBackgroundImageOne from "@images/backgrounds/home1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  return (
    <LazyLoadImage
      src={HomeBackgroundImageOne}
      alt="A white house with black accents"
      effect="blur"
      className="w-full h-screen object-center object-cover"
    />
  );
}

export default App;
