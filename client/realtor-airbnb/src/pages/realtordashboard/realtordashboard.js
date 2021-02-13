import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";

export default function RealtorDashboard() {
  return (
    <div>
      <Navbar />
      Realtor Dashboard
      <Footer classNames="bg-gray-400 h-12 absolute bottom-0 w-full border-t-4 font-suez-one text-white text-center pt-1" />
    </div>
  );
}
