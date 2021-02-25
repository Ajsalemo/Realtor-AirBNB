export default function DisplayListings({ data, forSaleLoading }) {
  if (forSaleLoading) return <div>Loading..</div>;
  console.log(data);
  return (
    <div>
      {data &&
        data.RealtorForSaleQuery.properties.map((property, i) => (
          <div>{property.line}</div>
        ))}
      test
    </div>
  );
}
