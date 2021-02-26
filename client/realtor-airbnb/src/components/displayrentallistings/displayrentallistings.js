export default function DisplayRentalListings({ data, forRentLoading }) {
    if (forRentLoading) return <div>Loading..</div>;
    console.log(data);
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
  