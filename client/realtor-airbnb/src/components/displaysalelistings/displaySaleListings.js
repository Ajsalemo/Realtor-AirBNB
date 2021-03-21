import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import LazyLoadImages from "@components/lazyloadimages/lazyLoadImages";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import ScrollMarker from "@components/scrollmarker/scrollMarker"

export default function DisplaySaleListings({ data, forSaleLoading }) {
  if (forSaleLoading)
    return (
      <div className="h-screen flex justify-center items-center text-white">
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
        {data &&
          data.RealtorForSaleQuery.properties.map((property) => (
            // If the thumbnail is missing for the property - hide the result
            <div
              className={
                !property.thumbnail
                  ? "hidden"
                  : "flex flex-col w-ft mx-auto px-1"
              }
              key={property.property_id}
            >
              <LazyLoadImages
                src={property.thumbnail}
                classNames="rounded-lg mx-auto"
              />
              {/* Show the price of the property if it exists */}
              {property.price ? (
                <span className="font-suez-one text-lg sm:text-xl md:text-2xl">
                  ${property.price}
                </span>
              ) : null}
              <div className="flex">
                {/* Show how many bedrooms of the property if it exists */}
                {property.beds ? (
                  <span className="font-suez-one">{property.beds} bed</span>
                ) : null}
                {/* Show how many bathrooms of the property if it exists */}
                {property.baths ? (
                  <span className="font-suez-one pl-6">
                    {property.baths} baths
                  </span>
                ) : null}
                {/* Show the square footage of the property if it exists */}
                {property.building_size ? (
                  <span className="font-suez-one pl-6">
                    {property.building_size.size} sqft
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
      <ScrollMarker />
    </div>
  );
}
