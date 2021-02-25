import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORRENT_QUERY } from "@apollographql_queries/realtorforrentquery";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import DisplaySaleListings from "@components/displaysalelistings/displaysalelistings";
import Navbar from "@components/navbar/navbar";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RealtorListings() {
  const { city, state_code, limit, offset, rentOrSell } = useParams();
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
    rentOrSell,
    state_code,
  ]);

  return (
    <Fragment>
      <Navbar />
      {/* 
        Splitting the Rent and Sale listings into their own components for easier component management
        The returned API's share mostly the same properties but vary just enough to warrant a splitting of components
      */}
      <DisplaySaleListings
        data={forSaleData}
        forSaleLoading={forSaleLoading}
      />
    </Fragment>
  );
}
