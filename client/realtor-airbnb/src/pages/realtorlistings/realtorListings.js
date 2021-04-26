import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORRENT_QUERY } from "@apollographql_queries/realtorForRentQuery";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorForSaleQuery";
import DisplaySaleAndRentalListings from "@components/shared/displaysaleandrentallistings/displaySaleAndRentalListings";
import ResultLayout from "@layouts/ResultLayout/resultLayout";
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
    <ResultLayout>
      {/* 
        Splitting the Rent and Sale listings into their own components for easier component management
        The returned API's share mostly the same properties but vary just enough to warrant a splitting of components
      */}
      <div className="pb-12 bg-primary text-gray-300">
        {rentOrSell === "sell" ? (
          <DisplaySaleAndRentalListings
            data={forSaleData && forSaleData.RealtorForSaleQuery}
            forSaleLoading={forSaleLoading}
            rentOrSell={rentOrSell}
          />
        ) : (
          <DisplaySaleAndRentalListings
            data={forRentData && forRentData.RealtorForRentQuery}
            forRentLoading={forRentLoading}
            rentOrSell={rentOrSell}
          />
        )}
      </div>
    </ResultLayout>
  );
}
