export default function SalePropertyLowerDetail({ property }) {
  return (
    <div className="border-t-2 border-gray-500 pt-4 my-12">
      <div className="flex flex-col">
        {property && property.prop_type ? (
          <div className="text-sm">
            <span className="text-gray-400">Property Type</span>{" "}
            {property.prop_type}
          </div>
        ) : null}
        {property && property.year_built ? (
          <div className="text-sm">
            <span className="text-gray-400">Year Built</span>{" "}
            {property.year_built}
          </div>
        ) : null}
      </div>
    </div>
  );
}
