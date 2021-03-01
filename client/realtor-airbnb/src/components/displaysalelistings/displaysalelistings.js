import LazyLoadImages from "@components/lazyloadimages/lazyloadimages";

export default function DisplaySaleListings({ data, forSaleLoading }) {
  if (forSaleLoading)
    return (
      <div className="h-screen flex justify-center items-center">Loading..</div>
    );
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8">
      {data &&
        data.RealtorForSaleQuery.properties.map((property) => (
          // If the thumbnail is missing for the property - hide the result
          <div
            className={
              !property.thumbnail ? "hidden" : "flex flex-col w-ft mx-auto px-1"
            }
            key={property.property_id}
          >
            <LazyLoadImages
              src={property.thumbnail}
              classNames="rounded-lg mx-auto"
            />
            <div className="flex">
              {/* Show how many bedrooms of the property if it exists */}
              {property.beds ? (
                <span className="font-suez-one">
                  {property.beds} <b>bed</b>
                </span>
              ) : null}
              {/* Show how many bathrooms of the property if it exists */}
              {property.baths ? (
                <span className="font-suez-one pl-6">
                  {property.baths} <b>baths</b>
                </span>
              ) : null}
              {/* Show the square footage of the property if it exists */}
              {property.building_size ? (
                <span className="font-suez-one pl-6">
                  {property.building_size.size}
                  <b>sqft</b>
                </span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <span className="font-suez-one text-xs">House for sale</span>
              <span className="font-suez-one text-sm">
                {property.address.line}
              </span>
              <span className="font-suez-one text-sm">
                {property.address.city}, {property.address.state}{" "}
                {property.address.postal_code}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
