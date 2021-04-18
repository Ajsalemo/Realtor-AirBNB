import { gql } from "@apollo/client";

export const REALTOR_FORRENT_QUERY = gql`
  query RealtorForRentQuery($city: String!, $limit: String!, $offset: String!, $state_code: String!) {
    RealtorForRentQuery(city: $city, limit: $limit, offset: $offset, state_code: $state_code, sort: "relevance")
      @rest(
        type: "RealtorForRent"
        path: "/properties/v2/list-for-rent?city={args.city}&limit=20&offset={args.offset}&state_code={args.state_code}&sort={args.sort}"
      ) {
      properties {
        community {
          price_min
          price_max
          baths_min
          baths_max
          beds_min
          beds_max
          sqft_min
          sqft_max
        }
        property_id
        photos
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
      }
    }
  }
`;
