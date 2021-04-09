import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ScrollMarker() {
  // Check if the 'window' object is available
  const isBrowser = typeof window !== "undefined";
  const [scrollMarkerTopPosition, setScrollMarkerTopPosition] = useState(null);

  // Smooth scroll to top on click
  const scrollToTop = () => {
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isBrowser) {
      const onScroll = () => {
        setScrollMarkerTopPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [scrollMarkerTopPosition, isBrowser]);

  return scrollMarkerTopPosition && scrollMarkerTopPosition > 100 ? (
    <button onClick={() => scrollToTop()}>
      <FontAwesomeLib
        icon={faArrowUp}
        size="2x"
        classNames={
          "animate-bounce text-white fixed bottom-0 ml-2 mb-2 cursor-pointer bg-gray-400 rounded p-1 hover:bg-blue-500 transition duration-500 ease-in-out z-10"
        }
      />
    </button>
  ) : null;
}
