import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "@components/shared/authbutton/authButton";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import NavDropdown from "@components/shared/navdropdown/navDropdown";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [isOpen, expandDropdown] = useState(false);
  return (
    <nav className="h-12 bg-primary border-b-2 border-white font-raleway text-white">
      <div className="flex justify-end md:justify-between md:items-center h-full pl-2">
        <div className="hidden md:flex">
          <Link to="/" className="pr-3">
            Home
          </Link>
        </div>
        <div className="flex justify-end items-center h-full pr-2">
          <button
            onClick={() => expandDropdown(!isOpen)}
            className="rounded-full"
          >
            {isLoading ? (
              <FontAwesomeLib
                icon={faCircleNotch}
                size="2x"
                classNames="text-white animate-spin"
              />
            ) : user && isAuthenticated ? (
              <LazyLoadImages
                src={user.picture}
                classNames="h-10 w-10 rounded-full"
              />
            ) : (
              <AuthButton />
            )}
          </button>
        </div>
        <NavDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}
