import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORRENT_QUERY } from "@apollographql_queries/realtorForRentQuery";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorForSaleQuery";
import DisplayRentalListings from "@components/displayrentallistings/displayRentalListings";
import DisplaySaleListings from "@components/displaysalelistings/displaySaleListings";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import SubSearchbar from "@components/realtorsearchbar/realtorSearchbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RealtorListings() {
  const {
    city,
    state_code,
    limit,
    offset,
    rentOrSell,
    optPriceMin,
    optPriceMax,
    optPropType,
    optBedsMin,
    optBathsMin,
  } = useParams();

  const [
    getRealtorForsaleQuery,
    { loading: forSaleLoading, data: forSaleData },
  ] = useLazyQuery(REALTOR_FORSALE_QUERY);

  const [
    getRealtorForrentQuery,
    { loading: forRentLoading, data: forRentData },
  ] = useLazyQuery(REALTOR_FORRENT_QUERY);

  useEffect(() => {
    if (rentOrSell === "sell") {
      getRealtorForsaleQuery({
        variables: {
          city: city,
          limit: limit,
          offset: offset,
          state_code: state_code,
          price_min: optPriceMin,
          price_max: optPriceMax,
          prop_type: optPropType,
          beds_min: optBedsMin,
          baths_min: optBathsMin,
        },
      });
    } else {
      getRealtorForrentQuery({
        variables: {
          city: city,
          limit: limit,
          offset: offset,
          state_code: state_code,
        },
      });
    }
    return <div>An error has occurred.</div>;
  }, [
    city,
    getRealtorForrentQuery,
    getRealtorForsaleQuery,
    limit,
    offset,
    optBathsMin,
    optBedsMin,
    optPriceMax,
    optPriceMin,
    optPropType,
    rentOrSell,
    state_code,
  ]);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <SubSearchbar />
      {/* 
        Splitting the Rent and Sale listings into their own components for easier component management
        The returned API's share mostly the same properties but vary just enough to warrant a splitting of components
      */}
      <div className="pb-12">
        {rentOrSell === "sell" ? (
          <DisplaySaleListings
            data={forSaleData}
            forSaleLoading={forSaleLoading}
          />
        ) : (
          <DisplayRentalListings
            data={forRentData}
            forRentLoading={forRentLoading}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
