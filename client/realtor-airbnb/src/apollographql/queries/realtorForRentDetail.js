import { gql } from "@apollo/client";

export const REALTOR_FORRENT_DETAIL = gql`
  query RealtorForRentDetail($property_id: String!) {
    realtorForRentDetail(property_id: $property_id)
      @rest(
        type: "RealtorForRentDetail"
        path: "/properties/v2/detail?property_id={args.property_id}"
      ) {
      properties {
        address {
          city
          county
          state
          postal_code
          line
        }
        photos
        community {
          baths_min
          baths_max
          beds_min
          beds_max
          price_min
          price_max
          sqft_min
          sqft_max
        }
        floor_plans {
          availability {
            available
          }
          baths
          beds
          name
          sqft
          price
        }
      }
    }
  }
`;
