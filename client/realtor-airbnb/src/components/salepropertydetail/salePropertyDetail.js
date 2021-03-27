export default function SalePropertyDetail({ property }) {
  return (
    <>
      {/* Show the price of the property if it exists */}
      {property && property.price ? (
        <span className="font-suez-one text-lg sm:text-xl md:text-2xl">
          ${property.price}
        </span>
      ) : null}
      <div className="flex">
        {/* Show how many bedrooms of the property if it exists */}
        {property && property.beds ? (
          <span className="font-suez-one">{property.beds} bed</span>
        ) : null}
        {/* Show how many bathrooms of the property if it exists */}
        {property && property.baths ? (
          <span className="font-suez-one pl-6">{property.baths} baths</span>
        ) : null}
        {/* Show the square footage of the property if it exists */}
        {property && property.building_size ? (
          <span className="font-suez-one pl-6">
            {property.building_size.size} sqft
          </span>
        ) : null}
      </div>
      <div className="flex flex-col">
        <span className="font-suez-one text-xs">House for sale</span>
        {property && property.address ? (
          <>
            <span className="font-suez-one text-sm">
              {property.address.line}
            </span>
            <span className="font-suez-one text-sm">
              {property.address.city}, {property.address.state}{" "}
              {property.address.postal_code}
            </span>
          </>
        ) : null}
      </div>
    </>
  );
}
