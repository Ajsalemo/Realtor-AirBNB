import pricePerSqFtCalc from "@helpers/functions/pricePerSqFtCalc";
import propTypeHelper from "@helpers/functions/propTypeHelper";

export default function SalePropertyLowerDetail({ property }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-t-2 border-gray-500 pt-4 my-12">
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
        {property && property.last_sold && property.last_sold.length > 0 ? (
          <div className="text-sm">
            <span className="text-gray-400">Last Sold</span>{" "}
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
      </div>
    </div>
  );
}
