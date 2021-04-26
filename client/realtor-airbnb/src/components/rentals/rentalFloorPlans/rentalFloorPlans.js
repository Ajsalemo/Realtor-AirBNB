import SaleAndRentalPropertyDetailMenu from "@components/shared/saleandrentalpropertydetailmenu/saleAndRentalPropertyDetailMenu";

export default function RentalFloorPlans({ data }) {
  console.log(data);
  return (
    <>
      <h2 className="font-suez-one pt-6 text-xl">
        {data && data.community && data.community.name
          ? `Property Details for ${data.community.name}`
          : `Property Details`}
      </h2>
      {data && data.community && data.community.contact_number ? (
        <h3>Call at {data.community.contact_number}</h3>
      ) : null}
      <h2 className="font-suez-one pt-6 text-lg">Floor Plans</h2>
      {data && data.floor_plans && data.floor_plans.length > 0
        ? data.floor_plans.map((plan) => (
            <SaleAndRentalPropertyDetailMenu
              key={plan.id}
              title={plan && plan.beds ? `${plan.beds} bedroom` : `0 bedroom`}
            >
              <div className="flex justify-between">
                <span className="text-gray-400 text-xs">
                  {plan && plan.name ? plan.name : "Plan not available"}
                </span>
                <div>
                  <span className="text-gray-400 text-xs">
                    {plan && plan.baths ? `${plan.baths} ba` : "N/A"}
                  </span>
                  <span className="text-gray-400 text-xs pl-2">
                    {plan && plan.sqft ? `${plan.sqft} sqft` : "N/A"}
                  </span>
                  <span className="text-gray-400 text-xs pl-2">
                    {plan && plan.price ? `$${plan.price} price` : "N/A"}
                  </span>
                </div>
              </div>
            </SaleAndRentalPropertyDetailMenu>
          ))
        : "Not available"}
    </>
  );
}
