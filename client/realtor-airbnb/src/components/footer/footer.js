import { Link } from "react-router-dom";

export default function Footer({ classNames }) {
  return (
    <footer className={classNames || null}>
      {" "}
      <Link to="/">Home</Link>
    </footer>
  );
}
