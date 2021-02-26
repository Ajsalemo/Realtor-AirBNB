import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";

export default function DisplaySaleListings({ data, forSaleLoading }) {
  if (forSaleLoading) return <div>Loading..</div>;
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data &&
        data.RealtorForSaleQuery.properties.map((property, i) => (
          // If the thumbnail is missing for the property - hide the result
          <div className={!property.thumbnail ? "hidden" : "flex flex-col"}>
            <LazyLoadImages
              src={property.thumbnail}
              classNames="rounded-lg mx-auto"
            />
            <div className="flex flex-col pl-24">
              <span className="font-suez-one text-xs">
                House for sale
              </span>
              <span className="font-suez-one text-sm">
                {property.address.line}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
