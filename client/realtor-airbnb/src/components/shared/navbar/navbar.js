import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import NavDropdown from "@components/shared/navdropdown/navDropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const [isOpen, expandDropdown] = useState(false);
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="h-12 bg-primary border-b-2 border-white font-raleway text-white">
      {/* This div contains navigation links for tablet sized screens and bigger - this is hidden on mobile */}
      <div className="hidden md:flex md:justify-between md:items-center h-full pl-2">
        <div>
          <Link to="/" className="pr-3">
            Home
          </Link>
        </div>
        <button className="pr-3" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
      {/* This div contains navigation links for mobile sized screens - this is hidden on tablets and larger */}
      <div className="flex justify-end items-center h-full md:hidden pr-2">
        <button onClick={() => expandDropdown(!isOpen)}>
          <FontAwesomeLib icon={faBars} size="2x" classNames="text-white" />
        </button>
      </div>
      <NavDropdown isOpen={isOpen} />
    </nav>
  );
}
