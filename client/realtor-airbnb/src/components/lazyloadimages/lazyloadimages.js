import LandingNavigation from "@components/landingnavigation/landingnavigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoadImages({ src, classNames }) {
  return (
    <div className="h-screen relative">
      <LazyLoadImage
        src={src}
        alt="Images of homes for sale"
        effect="blur"
        className={classNames || null}
      />
      <LandingNavigation />
    </div>
  );
}
