import { gql } from "@apollo/client";

export const REALTOR_FORSALE_DETAIL = gql`
  query RealtorForSaleDetail($property_id: String!) {
    realtorForSaleDetail(property_id: $property_id)
      @rest(
        type: "RealtorForSaleDetail"
        path: "/properties/v2/detail?property_id={args.property_id}"
      ) {
      properties {
        address
      }
    }
  }
`;
