import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-12 bg-gray-400 border-b-4 border-white font-suez-one text-white">
      {/* This div contains navigation links for tablet sized screens and bigger - this is hidden on mobile */}
      <div className="hidden md:flex">
        <Link to="/">Home</Link>
      </div>
      {/* This div contains navigation links for mobile sized screens - this is hidden on tablets and larger */}
      <div className="flex md:hidden"></div>
    </nav>
  );
}
