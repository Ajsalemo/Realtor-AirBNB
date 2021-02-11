import { Link } from "react-router-dom";

export default function LandingNavigation() {
  return (
    <h1 className="text-center text-white text-4xl md:text-5xl absolute top-1/2 left-1/10 right-1/10 flex flex-col w-min mx-auto border-r-2 border-white pr-4">
      <Link to="/">Realtor</Link>
      <Link to="/" className="italic">
        AirBnB
      </Link>
    </h1>
  );
}
