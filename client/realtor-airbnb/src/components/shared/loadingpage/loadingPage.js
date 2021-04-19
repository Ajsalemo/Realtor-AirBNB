import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import RealtorSearchbar from "@components/sales/realtorsearchbar/realtorSearchbar";
import Navbar from "@components/shared/navbar/navbar";

export default function LoadingPage() {
  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
        <RealtorSearchbar />
      </div>
      <div className="min-h-screen flex justify-center items-center text-white bg-primary">
        <FontAwesomeLib
          icon={faCircleNotch}
          size="2x"
          classNames={"animate-spin text-blue-600 mr-2"}
        />
        Loading..
      </div>
    </>
  );
}
