import RealtorSearchbar from "@components/sales/realtorsearchbar/realtorSearchbar";
import Footer from "@components/shared/footer/footer";
import Navbar from "@components/shared/navbar/navbar";
import ScrollMarker from "@components/shared/scrollmarker/scrollMarker";

export default function ResultLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-primary">
      <div className="fixed w-full z-10">
        <Navbar />
        <RealtorSearchbar />
      </div>
      {children}
      <ScrollMarker />
      <Footer />
    </div>
  );
}
