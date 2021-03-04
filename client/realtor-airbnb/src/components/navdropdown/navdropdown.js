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
        <Link
          to="/realtor-dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Realtor listings
        </Link>
        <Link
          to="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          AirBnB listings
        </Link>
        <Link
          to="/"
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          role="menuitem"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
