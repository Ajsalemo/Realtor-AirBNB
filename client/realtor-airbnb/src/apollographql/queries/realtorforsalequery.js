import { gql } from "@apollo/client";

export const REALTOR_FORSALE_QUERY = gql`
  query RealtorForSaleQuery(
    $city: String!
    $limit: String!
    $offset: String!
    $state_code: String!
    # Optional arguments
    $price_min: String
    $price_max: String
    $prop_type: String
    $beds_min: String
    $baths_min: String
  ) {
    RealtorForSaleQuery(
      city: $city
      limit: $limit
      offset: $offset
      state_code: $state_code
      sort: "relevance"
      # Optional arguments
      price_min: $price_min
      price_max: $price_max
      prop_type: $prop_type
      beds_min: $beds_min
      baths_min: $baths_min
    )
      @rest(
        type: "RealtorForSale"
        path: "/properties/v2/list-for-sale?city={args.city}&limit={args.limit}&offset={args.offset}&state_code={args.state_code}&sort={args.sort}&price_min={args.price_min}&price_max={args.price_max}&prop_type={args.prop_type}&beds_min={args.beds_min}&baths_min={args.baths_min}"
      ) {
      properties {
        property_id
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
