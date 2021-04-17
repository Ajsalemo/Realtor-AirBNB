import LoadingPage from "@components/shared/loadingpage/loadingPage";

export default function DisplayRentalListings({ data, forRentLoading }) {
  if (forRentLoading) return <LoadingPage />;

  return (
    <div>
      {data &&
        data.RealtorForRentQuery.properties.map((property, i) => (
          <div>{property.line}</div>
        ))}
      test
    </div>
  );
}
