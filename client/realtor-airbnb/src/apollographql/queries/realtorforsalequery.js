import { gql } from "@apollo/client";

export const REALTOR_FORSALE_QUERY = gql`
  query RealtorForSaleQuery($city: String!, $limit: String!, $offset: String!, $state_code: String!) {
    RealtorForSaleQuery(city: $city, limit: $limit, offset: $offset, state_code: $state_code, sort: "relevance")
      @rest(
        type: "RealtorForSale"
        path: "/properties/v2/list-for-sale?city={args.city}&limit={args.limit}&offset={args.offset}&state_code={args.state_code}&sort={args.sort}"
      ) {
      properties {
        address {
          city
          county
          fips_code
          lat
          line
          lon
          neighborhood_name
          postal_code
          state
          state_code
          time_zone
        }
        price
        baths_full
        baths
        beds
        building_size {
          size
          units
        }
        thumbnail
      }
    }
  }
`;
