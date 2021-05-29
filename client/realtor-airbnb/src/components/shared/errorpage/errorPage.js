import RealtorSearchbar from "@components/shared/realtorsearchbar/realtorSearchbar";
import Navbar from "@components/shared/navbar/navbar";
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
  const history = useHistory();

  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
        <RealtorSearchbar />
      </div>
      <div className="min-h-screen flex justify-center items-center text-white bg-primary">
        An error has occurred.
        <button onClick={() => history.goBack()} className="pl-1 underline">Go back</button>
      </div>
    </>
  );
}
