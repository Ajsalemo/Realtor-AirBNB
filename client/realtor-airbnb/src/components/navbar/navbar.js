import FontAwesomeLib from "@components/fontawesomelib/fontawesomelib";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-12 bg-gray-400 border-b-4 border-white font-suez-one text-white">
      {/* This div contains navigation links for tablet sized screens and bigger - this is hidden on mobile */}
      <div className="hidden md:flex md:justify-between md:items-center h-full pl-2">
        <div>
          <Link to="/" className="pr-3">
            Home
          </Link>
          <Link to="/" className="pr-3">
            Realtor listings
          </Link>
          <Link to="/">AirBnB listings</Link>
        </div>
        <Link to="/" className="pr-3">
          Login
        </Link>
      </div>
      {/* This div contains navigation links for mobile sized screens - this is hidden on tablets and larger */}
      <div className="flex justify-end items-center h-full md:hidden pr-2">
        <button>
          <FontAwesomeLib icon={faBars} size="2x" classNames="text-white" />
        </button>
      </div>
    </nav>
  );
}
