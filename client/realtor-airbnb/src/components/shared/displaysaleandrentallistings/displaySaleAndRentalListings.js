import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import LoadingPage from "@components/shared/loadingpage/loadingPage";
import SaleAndRentalPropertyUpperDetail from "@components/shared/saleandrentalpropertyupperdetail/saleAndRentalPropertyUpperDetail";
import ScrollMarker from "@components/shared/scrollmarker/scrollMarker";
import { Link } from "react-router-dom";

export default function DisplaySaleAndRentalListings({
  data,
  forSaleLoading,
  forRentLoading,
  rentOrSell,
}) {
  if (forSaleLoading || forRentLoading) return <LoadingPage />;

  return (
    <div className="pt-48 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
        {data && data.properties
          ? data.properties.map((property) => (
              // If the thumbnail is missing for the property - hide the result
              <div
                className={
                  (!property.thumbnail && rentOrSell === "sell") ||
                  (!property.photos && rentOrSell === "rent")
                    ? "hidden"
                    : "flex"
                }
                key={property.property_id}
              >
                <Link
                  to={{
                    pathname: `/detail/${property.property_id}`,
                    state: {
                      thumbnail: property.thumbnail,
                    },
                  }}
                  className="flex flex-col w-ft mx-auto px-1"
                >
                  <LazyLoadImages
                    src={
                      rentOrSell === "sell" &&
                      property.prop_type !== "apartment"
                        ? property.thumbnail
                        : property.photos[0] && property.photos[0].href
                    }
                    classNames="rounded-lg mx-auto"
                  />
                  <SaleAndRentalPropertyUpperDetail
                    property={property}
                    rentOrSell={rentOrSell}
                  />
                </Link>
              </div>
            ))
          : "An error has occured. Please try again."}
      </div>
      <ScrollMarker />
    </div>
  );
}
