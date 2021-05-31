import AuthButton from "@components/shared/authbutton/authButton";
import { Link } from "react-router-dom";

export default function NavDropdown({ isOpen }) {
  return (
    <div
      // If the isOpen boolean is false, hide the dropdown - else if it's true, display it
      className={
        !isOpen
          ? `hidden`
          : `z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`
      }
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <Link
          to="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Home
        </Link>
        {/* Login and Logout buttons */}
        <AuthButton
          logInOutClassname="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          loadingIconClassname="animate-spin text-gray-700 ml-2"
        />
      </div>
    </div>
  );
}
