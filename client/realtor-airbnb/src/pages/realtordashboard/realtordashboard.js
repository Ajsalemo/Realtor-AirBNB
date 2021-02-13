import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import RealtorDashboardBackgroundImage from "@images/backgrounds/realtor_dashboard_background.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function RealtorDashboard() {
  return (
    <div>
      <Navbar />
      <LazyLoadImage
        src={RealtorDashboardBackgroundImage}
        className="object-center object-cover w-full sm:h-96"
      />
      Realtor Dashboard
      <Footer classNames="bg-gray-400 h-12 absolute bottom-0 w-full border-t-4 font-suez-one text-white text-center pt-1" />
    </div>
  );
}
