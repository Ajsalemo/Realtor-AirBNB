import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_DETAIL } from "@apollographql_queries/realtorForSaleDetail";
import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import RealtorSearchbar from "@components/realtorsearchbar/realtorSearchbar";
import ScrollMarker from "@components/scrollmarker/scrollMarker";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useParams } from "react-router";
import LazyLoadImages from "@components/lazyloadimages/lazyLoadImages";

export default function RealtorListingsDetail(state) {
  const { property_id } = useParams();
  const { thumbnail } = state.location.state;
  const [getRealtorForSaleDetail, { loading, data }] = useLazyQuery(
    REALTOR_FORSALE_DETAIL
  );
  useEffect(() => {
    // When this component is accessed with the 'property_id' passed through the listings page
    // Execute this Apollo GraphQL query to retrieve specific details on the property
    getRealtorForSaleDetail({
      variables: {
        property_id: property_id,
      },
    });
  }, [getRealtorForSaleDetail, property_id]);
  console.log(data);
  
  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-white bg-primary">
        {" "}
        <FontAwesomeLib
          icon={faCircleNotch}
          size="2x"
          classNames={"animate-spin text-blue-600 mr-2"}
        />
        Loading..
      </div>
    );

  return (
    <div className="min-h-screen relative bg-primary">
      <div className="fixed w-full z-10">
        <Navbar />
        <RealtorSearchbar />
      </div>
      <div className="bg-primary text-white pt-48 md:pt-24">
        <div className="text-center">
          <LazyLoadImages
            src={thumbnail}
            classNames="rounded-lg"
          />
        </div>
      </div>
      <ScrollMarker />
      <Footer />
    </div>
  );
}
