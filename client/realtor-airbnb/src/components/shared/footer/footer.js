import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary absolute bottom-0 h-12 w-full border-t-4 font-suez-one text-white text-center pt-1">
      <Link to="/">Github</Link>
    </footer>
  );
}
