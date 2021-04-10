import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SalePropertyDetailMenu({ title, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-500 py-4 mb-10">
      <div className="flex justify-center lg:justify-start">
        <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? (
            <FontAwesomeLib
              icon={faChevronDown}
              size="2x"
              classNames="text-white cursor-pointer"
            />
          ) : (
            <FontAwesomeLib
              icon={faChevronUp}
              size="2x"
              classNames="text-white cursor-pointer"
            />
          )}
        </span>
        <h2 className="pl-2 font-suez-one text-lg sm:text-xl md:text-2xl">{title}</h2>
      </div>
      <div className={!isMenuOpen ? `hidden` : ``}>{children}</div>
    </div>
  );
}
