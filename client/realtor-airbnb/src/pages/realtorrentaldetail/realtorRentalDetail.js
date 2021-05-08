import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORRENT_DETAIL } from "@apollographql_queries/realtorForRentDetail";
import RentalFloorPlans from "@components/rentals/rentalFloorPlans/rentalFloorPlans";
import SaleAndRentalPropertySchoolListings from "@components/sales/saleandrentalpropertyschoollistings/saleAndRentalPropertySchoolListings";
import ErrorPage from "@components/shared/errorpage/errorPage";
import FontAwesomeLib from "@components/shared/fontawesomelib/fontAwesomeLib";
import LazyLoadImages from "@components/shared/lazyloadimages/lazyLoadImages";
import LoadingPage from "@components/shared/loadingpage/loadingPage";
import SaleAndRentalPropertyDetailMenu from "@components/shared/saleandrentalpropertydetailmenu/saleAndRentalPropertyDetailMenu";
import SaleAndRentalPropertyUpperDetail from "@components/shared/saleandrentalpropertyupperdetail/saleAndRentalPropertyUpperDetail";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import ResultLayout from "@layouts/ResultLayout/resultLayout";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function RealtorRentalDetail(state) {
  const { property_id } = useParams();
  const { href } = state.location.state.thumbnail;

  const [getRealtorForRentDetail, { loading, data, error }] = useLazyQuery(
    REALTOR_FORRENT_DETAIL
  );

  useEffect(() => {
    // When this component is accessed with the 'property_id' passed through the listings page
    // Execute this Apollo GraphQL query to retrieve specific details on the rental
    getRealtorForRentDetail({
      variables: {
        property_id: property_id,
      },
    });
  }, [getRealtorForRentDetail, property_id]);

  if (loading) return <LoadingPage />;
  // Validate is any needed arguments or properties are missing before passing props or acting on data
  // If any of these are missing - this indicates an error - show the error page is so
  if (
    !href ||
    !property_id ||
    error ||
    !data ||
    !data.realtorForRentDetail ||
    !data.realtorForRentDetail.properties
  )
    return <ErrorPage />;

  return (
    <ResultLayout>
      <div className="bg-primary text-white pt-48 md:pt-24 md:w-50 md:mx-auto">
        <div className="flex flex-col w-ft px-1 pt-12">
          <LazyLoadImages src={href} classNames="rounded-lg w-50" />
          {/* This component displays the price, bed/bath, address under the main photo */}
          <SaleAndRentalPropertyUpperDetail
            property={data && data.realtorForRentDetail.properties[0]}
          />
          <RentalFloorPlans
            data={data && data.realtorForRentDetail.properties[0]}
          />
          <SaleAndRentalPropertyDetailMenu title="Photos">
            {/* This collapsable menu displays photos taken of the community/rental */}
            <div className="text-center sm:grid sm:grid-cols-2 sm:gap-4">
              {data && data.realtorForRentDetail.properties[0].photos.length > 0
                ? data.realtorForRentDetail.properties[0].photos.map(
                    (photo, i) => (
                      <LazyLoadImages
                        src={photo.href}
                        key={`${photo.href} - ${i}`}
                      />
                    )
                  )
                : "No photos available."}
            </div>
          </SaleAndRentalPropertyDetailMenu>
          <SaleAndRentalPropertyDetailMenu title="Overview">
            {/* This collapsable menu displays community description and in-depth property details */}
            <div className="pb-8">
              {data && data.realtorForRentDetail.properties[0].year_built ? (
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-400">Built</h3>
                  <FontAwesomeLib
                    icon={faHammer}
                    size="2x"
                    classNames="text-gray-400"
                  />
                  <p>{data.realtorForRentDetail.properties[0].year_built}</p>
                </div>
              ) : (
                "No data to display."
              )}
            </div>
            {data && data.realtorForRentDetail.properties[0].description ? (
              <p className="text-sm">
                {data.realtorForRentDetail.properties[0].description}
              </p>
            ) : (
              "No data to display."
            )}
          </SaleAndRentalPropertyDetailMenu>
          <SaleAndRentalPropertyDetailMenu title="Schools">
            {data &&
            data.realtorForRentDetail.properties[0].schools.length > 0 ? (
              <SaleAndRentalPropertySchoolListings
                schools={data.realtorForRentDetail.properties[0].schools}
              />
            ) : (
              "No data to display."
            )}
          </SaleAndRentalPropertyDetailMenu>
        </div>
      </div>
    </ResultLayout>
  );
}
