import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ScrollMarker() {
  // Check if the 'window' object is available
  const isBrowser = typeof window !== "undefined";
  const [scrollMarkerTopPosition, setScrollMarkerTopPosition] = useState(null);

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
    <FontAwesomeLib
      icon={faArrowUp}
      size="2x"
      classNames={
        "animate-bounce text-white fixed bottom-0 pl-2 pb-2 cursor-pointer"
      }
    />
  ) : null;
}
