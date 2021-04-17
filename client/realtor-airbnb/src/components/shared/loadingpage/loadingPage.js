import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center text-white">
      {" "}
      <FontAwesomeLib
        icon={faCircleNotch}
        size="2x"
        classNames={"animate-spin text-blue-600 mr-2"}
      />
      Loading..
    </div>
  );
}
