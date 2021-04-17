import pricePerSqFtCalc from "@helpers/functions/pricePerSqFtCalc";
import propertyDateTimeHelper from "@helpers/functions/propertyDateTimeHelper";
import propTypeHelper from "@helpers/functions/propTypeHelper";

export default function SalePropertyLowerDetail({ property }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-t-2 border-b-2 border-gray-500 py-4 mt-24 mb-4">
      <div className="flex flex-col border-r-2 border-gray-500">
        {property && property.prop_type ? (
          <div className="text-sm">
            <span className="text-gray-400">Property Type</span>{" "}
            {propTypeHelper(property)}
          </div>
        ) : null}
        {property && property.year_built ? (
          <div className="text-sm">
            <span className="text-gray-400">Year Built</span>{" "}
            {property.year_built}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col border-r-2 border-gray-500">
        {property &&
        property.sold_history &&
        property.sold_history.length > 0 ? (
          <div className="text-sm">
            <span className="text-gray-400">Last Sold</span> $
            {property.sold_history[0].listing.price} in{" "}
            {propertyDateTimeHelper(property.sold_history[0].date)}
          </div>
        ) : null}
        {property &&
        property.price &&
        property.building_size &&
        property.building_size.size ? (
          <div className="text-sm">
            <span className="text-gray-400">Price per sqft</span> $
            {pricePerSqFtCalc(property.price, property.building_size.size)}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        {property && property.garage ? (
          <div className="text-sm">
            <span className="text-gray-400">Garage</span> {property.garage} Car
          </div>
        ) : null}
        {property && property.list_date ? (
          <div className="text-sm">
            <span className="text-gray-400">List date </span>
            {propertyDateTimeHelper(property.list_date)}
          </div>
        ) : null}
      </div>
    </div>
  );
}
