import { gql } from "@apollo/client";

export const REALTOR_FORRENT_QUERY = gql`
  query RealtorForRentQuery($city: String!, $limit: String!, $offset: String!, $state_code: String!) {
    RealtorForRentQuery(city: $city, limit: $limit, offset: $offset, state_code: $state_code, sort: "relevance")
      @rest(
        type: "RealtorForRent"
        path: "/properties/v2/list-for-rent?city={args.city}&limit={args.limit}&offset={args.offset}&state_code={args.state_code}&sort={args.sort}"
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
      }
    }
  }
`;
