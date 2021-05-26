import LandingNavigation from "@components/shared/landingnavigation/landingNavigation";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import LandingBackground from "@images/backgrounds/landingbackground.jpeg";
import ResultLayout from "@layouts/ResultLayout/resultLayout";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  return (
    <ResultLayout>
      <LazyLoadImages
        src={LandingBackground}
        classNames="object-center object-cover w-full h-screen img-filter"
      />
      <LandingNavigation />
    </ResultLayout>
  );
}
