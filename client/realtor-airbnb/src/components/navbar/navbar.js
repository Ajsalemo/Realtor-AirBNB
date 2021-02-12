import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-12 bg-gray-400 border-b-4 border-white font-suez-one text-white">
      <Link to="/">Home</Link>
    </nav>
  );
}
