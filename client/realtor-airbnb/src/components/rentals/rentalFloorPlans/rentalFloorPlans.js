import SaleAndRentalPropertyDetailMenu from "@components/shared/saleandrentalpropertydetailmenu/saleAndRentalPropertyDetailMenu";

export default function RentalFloorPlans({ data }) {
  return (
    <>
      <h2 className="font-raleway pt-6 text-xl">
        {data && data.community.name && data.community.name !== ""
          ? `Property Details for ${data.community.name}`
          : `Property Details`}
      </h2>
      {data && data.community.contact_number ? (
        <h3>Call at {data.community.contact_number}</h3>
      ) : null}
      {/* 
        Nested menu component for a better browsing experience if a community/rentail has multiple plans 
        This makes it easier to collapse all plans at once
      */}
      <SaleAndRentalPropertyDetailMenu title="Floor Plans">
        {data && data.floor_plans.length > 0
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
                      {plan && plan.price ? `$${plan.price} / month` : "N/A"}
                    </span>
                  </div>
                </div>
              </SaleAndRentalPropertyDetailMenu>
            ))
          : "Not available"}
      </SaleAndRentalPropertyDetailMenu>
    </>
  );
}
