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
        baths
        baths_full
        building_size
        stories
        address
        cooling
        heating
        lot_size
        list_date
        photos
        photo_attribution
        price
        prop_type
        garage
        schools
        sold_history
        property_history
        tax_history
        features {
          category 
          text
        }
      }
    }
  }
`;
