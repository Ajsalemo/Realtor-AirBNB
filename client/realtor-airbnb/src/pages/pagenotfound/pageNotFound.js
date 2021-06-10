import ResultLayout from "@layouts/ResultLayout/resultLayout";
import { Link, useHistory } from "react-router-dom";

export default function PageNotFound() {
  const history = useHistory();
  return (
    <ResultLayout>
      <div className="flex flex-col justify-center h-screen text-center">
        <h2 className="text-white text-xl">Page not found</h2>
        <div>
          <Link to="/" className="text-white">
            Go
            <span className="underline pl-1">home</span>
          </Link>
          <span className="text-white px-1">or</span>
          <button onClick={() => history.goBack()} className="text-white">
            go
            <span className="underline pl-1">back.</span>
          </button>
        </div>
      </div>
    </ResultLayout>
  );
}
