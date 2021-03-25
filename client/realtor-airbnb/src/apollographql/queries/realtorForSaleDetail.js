import { gql } from "@apollo/client";

export const REALTOR_FORSALE_DETAIL = gql`
  query RealtorForSaleDetail($property_id: String!) {
    realtorForSaleDetail(property_id: $property_id)
      @rest(
        type: "RealtorForSaleDetail"
        path: "/properties/v2/detail?property_id={args.property_id}"
      ) {
      properties {
        agents
        broker {
          name
          phone1 {
            number
          }
        }
        address {
          city
          county
          state
          postal_code
          line
        }
        year_built
        beds
        description
        baths_full
        stories
        address
        cooling
        heating
        lot_size
        photos
        price
        schools
        sold_history
        tax_history
      }
    }
  }
`;
