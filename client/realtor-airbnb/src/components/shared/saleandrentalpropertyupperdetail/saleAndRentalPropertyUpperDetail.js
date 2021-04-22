import SaleAndRentalPropertySubDetail from "@components/shared/saleandrentalpropertysubdetail/saleAndRentalPropertySubDetail";

export default function SaleAndRentalPropertyUpperDetail({
  property,
  rentOrSell,
}) {
  return (
    <>
      {/* Show the price of the property if it exists */}
      {property && property.price && property.prop_type !== "apartment" ? (
        <span className="font-suez-one text-lg sm:text-xl md:text-2xl">
          ${property.price}
          {rentOrSell === "rent" ? (
            <span className="font-suez-one text-sm"> /month</span>
          ) : null}
        </span>
      ) : // If this is a rental property, display the min - max monthly rent
      property && property.community ? (
        <span className="font-suez-one text-lg sm:text-xl md:text-2xl">
          $
          <SaleAndRentalPropertySubDetail
            min={`${property.community.price_min}`}
            max={`${property.community.price_max}`}
            roomType=""
          />
        </span>
      ) : null}

      <div className="flex">
        {/* Show how many bedrooms of the property if it exists */}
        {property && property.baths ? (
          <span className="font-suez-one">{property.beds} bed</span>
        ) : // If this is a rental property, display the min - max bedrooms
        property && property.community ? (
          <span className="font-suez-one">
            <SaleAndRentalPropertySubDetail
              min={property.community.beds_min}
              max={property.community.beds_max}
              roomType="bed"
            />
          </span>
        ) : null}
        {/* Show how many bathrooms of the property if it exists */}
        {property && property.baths ? (
          <span className="font-suez-one pl-6">{property.baths} baths</span>
        ) : // If this is a rental property, display the min - max bathrooms
        property && property.community ? (
          <span className="font-suez-one pl-6">
            <SaleAndRentalPropertySubDetail
              min={property.community.baths_min}
              max={property.community.baths_max}
              roomType="bath"
            />
          </span>
        ) : null}
        {/* Show the square footage of the property if it exists */}
        {property && property.building_size && rentOrSell === "sell" ? (
          <span className="font-suez-one pl-6">
            {property.building_size.size} sqft
          </span>
        ) : // If this is a rental property, display the min - max sqft
        property && property.community ? (
          <span className="font-suez-one pl-6">
            <SaleAndRentalPropertySubDetail
              min={property.community.sqft_min}
              max={property.community.sqft_max}
              roomType="sqft"
            />
          </span>
        ) : null}
      </div>

      <div className="flex flex-col">
        <span className="font-suez-one text-xs">
          {rentOrSell === "sell"
            ? "House for sale"
            : rentOrSell === "rent" &&
              property.community &&
              property.prop_type === "apartment"
            ? "Apartment for rent"
            : "House for rent"}
        </span>
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
