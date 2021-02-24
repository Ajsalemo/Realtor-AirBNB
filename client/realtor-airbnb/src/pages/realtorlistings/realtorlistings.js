import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_QUERY } from "@apollographql_queries/realtorforsalequery";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RealtorListings() {
  const { city, state_code, limit, offset, rentOrSell } = useParams();
  const [getRealtorForsaleQuery, { loading, data }] = useLazyQuery(
    REALTOR_FORSALE_QUERY
  );

  useEffect(() => {
    getRealtorForsaleQuery({
      variables: { city: city, limit: limit, offset: offset, state_code: state_code },
    });
  }, [city, getRealtorForsaleQuery, limit, offset, state_code]);
  console.log(rentOrSell);
  return <div>test</div>;
}
