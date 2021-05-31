import { gql } from "@apollo/client";

export const REALTOR_FORRENT_QUERY = gql`
  query RealtorForRentQuery(
    $city: String!
    $limit: String!
    $offset: String!
    $state_code: String!
    # Optional arguments
    $prop_type: String
    $beds_min: String
    $baths_min: String
  ) {
    RealtorForRentQuery(
      city: $city
      limit: $limit
      offset: $offset
      state_code: $state_code
      sort: "relevance"
      # Optional arguments
      prop_type: $prop_type
      beds_min: $beds_min
      baths_min: $baths_min
    )
      @rest(
        type: "RealtorForRent"
        path: "/properties/v2/list-for-rent?city={args.city}&limit={args.limit}&offset={args.offset}&state_code={args.state_code}&sort={args.sort}&prop_type={args.prop_type}&beds_min={args.beds_min}&baths_min={args.baths_min}"
      ) {
      properties {
        beds
        baths
        building_size
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
        prop_type
        photos
        price
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
