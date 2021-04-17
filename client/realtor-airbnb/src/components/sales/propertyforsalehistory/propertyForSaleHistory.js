import propertyDateTimeHelper from "@helpers/functions/propertyDateTimeHelper";

export default function PropertyForSaleHistory({ saleHistory, taxHistory }) {
  return (
    <>
      <span className="text-white text-sm border-b-2 border-gray-500 mb-4">
        Property Price
      </span>
      <div className="pb-4">
        <ul>
          {/* Check if the saleHistory array has content before mapping over it */}
          {saleHistory.length > 0 &&
            saleHistory.map((history, i) => (
              <li
                key={`${history.price} - ${i}`}
                className="text-gray-400 text-xs"
              >
                {history.date
                  ? `${propertyDateTimeHelper(history.date)} - `
                  : null}{" "}
                {history.event_name ? `${history.event_name} - ` : null}$
                {history.price ? `${history.price}` : null}
              </li>
            ))}
        </ul>
      </div>
      <span className="text-white text-sm border-b-2 border-gray-500 mb-4">
        Property Tax
      </span>
      <div>
        {/* Check if the taxHistory array has content before mapping over it */}
        {taxHistory.length > 0 &&
          taxHistory.map((tax, j) => (
            <div className="flex flex-row w-ft" key={`tax-history-${j}`}>
              <div className="flex flex-col pb-4">
                <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                  Tax year
                </span>
                <span className="text-gray-400 text-xs">
                  {tax.year ? tax.year : "Not available"}
                </span>
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                  Taxes
                </span>
                <span className="text-gray-400 text-xs">
                  {tax.tax ? `$${tax.tax}` : "Not available"}
                </span>
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                  Land
                </span>
                <span className="text-gray-400 text-xs">
                  {tax.assessment && tax.assessment.land
                    ? `$${tax.assessment.land}`
                    : "Not available"}
                </span>
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                  Building
                </span>
                <span className="text-gray-400 text-xs">
                  {tax.assessment && tax.assessment.building
                    ? `$${tax.assessment.building}`
                    : "Not available"}
                </span>
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                  Total Assessment
                </span>
                <span className="text-gray-400 text-xs">
                  {tax.assessment && tax.assessment.total
                    ? `$${tax.assessment.total}`
                    : "Not available"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
