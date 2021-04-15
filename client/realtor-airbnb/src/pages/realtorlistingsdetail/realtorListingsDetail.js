import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_DETAIL } from "@apollographql_queries/realtorForSaleDetail";
import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import Footer from "@components/footer/footer";
import LazyLoadImages from "@components/lazyloadimages/lazyLoadImages";
import MonthlyPaymentPropertyDetail from "@components/monthlypaymentpropertydetail/monthlypaymentpropertydetail";
import Navbar from "@components/navbar/navbar";
import PropertyForSaleHistory from "@components/propertyforsalehistory/propertyForSaleHistory";
import PropertySaleFeatures from "@components/propertysalefeatures/propertySaleFeatures";
import RealtorSearchbar from "@components/realtorsearchbar/realtorSearchbar";
import SalePropertyDetailMenu from "@components/salepropertydetailmenu/salePropertyDetailMenu";
import SalePropertyLowerDetail from "@components/salepropertylowerdetail/salePropertyLowerDetail";
import SalePropertySchoolListings from "@components/salepropertyschoollistings/salePropertySchoolListings";
import SalePropertyUpperDetail from "@components/salepropertyupperdetail/salePropertyUpperDetail";
import ScrollMarker from "@components/scrollmarker/scrollMarker";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import propertyDateTimeHelper from "@helpers/functions/propertyDateTimeHelper";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function RealtorListingsDetail(state) {
  const { property_id } = useParams();
  const { thumbnail } = state.location.state;
  const [getRealtorForSaleDetail, { loading, data }] = useLazyQuery(
    REALTOR_FORSALE_DETAIL
  );
  useEffect(() => {
    // When this component is accessed with the 'property_id' passed through the listings page
    // Execute this Apollo GraphQL query to retrieve specific details on the property
    getRealtorForSaleDetail({
      variables: {
        property_id: property_id,
      },
    });
  }, [getRealtorForSaleDetail, property_id]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-white bg-primary">
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
    <div className="min-h-screen relative bg-primary">
      <div className="fixed w-full z-10">
        <Navbar />
        <RealtorSearchbar />
      </div>
      <div className="bg-primary text-white pt-48 md:pt-24 md:w-50 md:mx-auto">
        <div className="flex flex-col w-ft px-1 pt-12">
          {/* List the Realtor who can be credited for the photo */}
          {data &&
          data.realtorForSaleDetail.properties[0].photo_attribution[0] ? (
            <div className="flex flex-col">
              <span className="font-suez-one text-sm">
                {data.realtorForSaleDetail.properties[0].photo_attribution[0]}
              </span>
            </div>
          ) : null}
          <LazyLoadImages src={thumbnail} classNames="rounded-lg w-50" />
          {/* This component displays the price, bed/bath, address under the main photo */}
          <SalePropertyUpperDetail
            property={data && data.realtorForSaleDetail.properties[0]}
          />
          {/* This displays 'secondary' information such as property type, year built, list date, etc. */}
          <SalePropertyLowerDetail
            property={data && data.realtorForSaleDetail.properties[0]}
          />
          {/* SlaePropertyDetailMenu is the collapsable menu component */}
          <SalePropertyDetailMenu title="Property Details">
            {/* This collapsable menu displays house description and in-depth property details */}
            {data && data.realtorForSaleDetail.properties[0].description ? (
              <p className="text-sm">
                {data.realtorForSaleDetail.properties[0].description}
              </p>
            ) : null}
            <h3 className="font-suez-one pt-12">Property Features</h3>
            <PropertySaleFeatures
              data={
                data &&
                data.realtorForSaleDetail.properties &&
                data.realtorForSaleDetail.properties[0].features
              }
            />
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Photos">
            {/* This collapsable menu displays photos taken of the home */}
            <div className="text-center sm:grid sm:grid-cols-2 sm:gap-4">
              {data && data.realtorForSaleDetail.properties[0].photos.length > 0
                ? data.realtorForSaleDetail.properties[0].photos.map(
                    (photo) => (
                      <LazyLoadImages src={photo.href} key={photo.href} />
                    )
                  )
                : "No photos available."}
            </div>
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Home Value">
            {/* This collapsable menu displays selling history of the home */}
            {data &&
            data.realtorForSaleDetail.properties[0].property_history.length >
              0 ? (
              <ul>
                {data.realtorForSaleDetail.properties[0].property_history.map(
                  (history, i) => (
                    <li
                      key={`${history.source} - ${i}`}
                      className="text-gray-400 text-xs"
                    >
                      {history.date
                        ? `${propertyDateTimeHelper(history.date)} - `
                        : null}{" "}
                      {history.event_name ? `${history.event_name} - ` : null}$
                      {history.price ? `${history.price}` : null}
                    </li>
                  )
                )}
              </ul>
            ) : (
              "No data to display."
            )}
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Monthly Payment">
            {/* This collapsable menu displays the estimated monthly payment */}
            {data &&
            data.realtorForSaleDetail.properties[0].mortgage.estimate ? (
              <MonthlyPaymentPropertyDetail
                data={data.realtorForSaleDetail.properties[0].mortgage.estimate}
                price={data.realtorForSaleDetail.properties[0].price}
              />
            ) : (
              "No data to display."
            )}
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Property History">
            {/* This collapsable menu displays the selling and yearly tax history */}
            <div className="flex flex-col">
              {(data &&
                data.realtorForSaleDetail.properties[0].property_history) ||
              (data && data.realtorForSaleDetail.properties[0].tax_history) ? (
                <PropertyForSaleHistory
                  saleHistory={
                    data.realtorForSaleDetail.properties[0].property_history
                  }
                  taxHistory={
                    data.realtorForSaleDetail.properties[0].tax_history
                  }
                />
              ) : (
                "No data to display."
              )}{" "}
            </div>
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Schools">
            {data &&
            data.realtorForSaleDetail.properties[0].schools.length > 0 ? (
              <SalePropertySchoolListings
                schools={data.realtorForSaleDetail.properties[0].schools}
              />
            ) : (
              "No data to display."
            )}
          </SalePropertyDetailMenu>
        </div>
      </div>
      <ScrollMarker />
      <Footer />
    </div>
  );
}
