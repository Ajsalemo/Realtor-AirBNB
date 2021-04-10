import { useLazyQuery } from "@apollo/client";
import { REALTOR_FORSALE_DETAIL } from "@apollographql_queries/realtorForSaleDetail";
import FontAwesomeLib from "@components/fontawesomelib/fontAwesomeLib";
import Footer from "@components/footer/footer";
import LazyLoadImages from "@components/lazyloadimages/lazyLoadImages";
import Navbar from "@components/navbar/navbar";
import RealtorSearchbar from "@components/realtorsearchbar/realtorSearchbar";
import SalePropertyDetailMenu from "@components/salepropertydetailmenu/salePropertyDetailMenu";
import SalePropertyLowerDetail from "@components/salepropertylowerdetail/salePropertyLowerDetail";
import SalePropertyUpperDetail from "@components/salepropertyupperdetail/salePropertyUpperDetail";
import ScrollMarker from "@components/scrollmarker/scrollMarker";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
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
          {data &&
          data.realtorForSaleDetail.properties[0] &&
          data.realtorForSaleDetail.properties[0].photo_attribution[0] ? (
            <div className="flex flex-col">
              <span className="font-suez-one text-sm">
                {data.realtorForSaleDetail.properties[0].photo_attribution[0]}
              </span>
            </div>
          ) : null}
          <LazyLoadImages src={thumbnail} classNames="rounded-lg w-50" />
          <SalePropertyUpperDetail
            property={data && data.realtorForSaleDetail.properties[0]}
          />
          <SalePropertyLowerDetail
            property={data && data.realtorForSaleDetail.properties[0]}
          />
          <SalePropertyDetailMenu title="Property Details">
            {data && data.realtorForSaleDetail.properties[0].description ? (
              <p className="text-sm">
                {data.realtorForSaleDetail.properties[0].description}
              </p>
            ) : null}
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Home Value">
            <p className="text-sm">"Placeholder"</p>
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Monthly Payment">
            <p className="text-sm">"Placeholder"</p>
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Property History">
            <p className="text-sm">"Placeholder"</p>
          </SalePropertyDetailMenu>
          <SalePropertyDetailMenu title="Schools">
            <p className="text-sm">"Placeholder"</p>
          </SalePropertyDetailMenu>
        </div>
      </div>
      <ScrollMarker />
      <Footer />
    </div>
  );
}
