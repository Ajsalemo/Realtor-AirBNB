export default function MonthlyPaymentPropertyDetail({ data, price }) {
  return (
    <>
      <div className="border-b-2 border-gray-500 pb-4 mb-4 text-sm">
        {data && data.principal_and_interest ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Principal & Interest
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.principal_and_interest} / month
            </span>
          </div>
        ) : null}
        {data.monthly_property_taxes ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Property Taxes
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.monthly_property_taxes} / month
            </span>
          </div>
        ) : null}
        {data && data.monthly_home_insurance ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Homeowners Insurance
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.monthly_home_insurance} / month
            </span>
          </div>
        ) : null}
        {data && data.monthly_mortgage_insurance ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Mortgage Insurance{" "}
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.monthly_mortgage_insurance} / month
            </span>
          </div>
        ) : null}
        {data && data.hoa_fees ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              HOA Fees{" "}
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.hoa_fees} / month
            </span>
          </div>
        ) : null}
        {data && data.rate ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Rate
            </span>
            <span className="text-gray-400 text-xs ml-6">{data.rate} (%)</span>
          </div>
        ) : null}
        {data && data.term ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Mortgage loan type
            </span>
            <span className="text-gray-400 text-xs ml-6">
              {data.term} (year)
            </span>
          </div>
        ) : null}
        {data && data.down_payment ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Down payment{" "}
            </span>
            <span className="text-gray-400 text-xs ml-6">
              ${data.down_payment} | (20%){" "}
            </span>
          </div>
        ) : null}
        {data && price ? (
          <div className="flex flex-col">
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              Home Price{" "}
            </span>
            <span className="text-gray-400 text-xs ml-6">${price} </span>
          </div>
        ) : null}
      </div>
      {data && data.monthly_payment ? (
        <span className="mt-4 text-sm">
          ${data.monthly_payment} monthly payment (based on the above figures)
        </span>
      ) : null}
    </>
  );
}
