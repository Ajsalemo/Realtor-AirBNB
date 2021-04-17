import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import SalePropertyDetail from "@components/sales/salepropertyupperdetail/salePropertyUpperDetail";
import ScrollMarker from "@components/shared/scrollmarker/scrollMarker";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    <div className="pt-48 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
        {data &&
          data.RealtorForSaleQuery.properties.map((property) => (
            // If the thumbnail is missing for the property - hide the result
            <div
              className={!property.thumbnail ? "hidden" : "flex"}
              key={property.property_id}
            >
              <Link
                to={{
                  pathname: `/detail/${property.property_id}`,
                  state: { thumbnail: property.thumbnail },
                }}
                className="flex flex-col w-ft mx-auto px-1"
              >
                <LazyLoadImages
                  src={property.thumbnail}
                  classNames="rounded-lg mx-auto"
                />
                <SalePropertyDetail property={property} />
              </Link>
            </div>
          ))}
      </div>
      <ScrollMarker />
    </div>
  );
}
