import { gql } from "@apollo/client";

export const REALTOR_FORSALE_QUERY = gql`
  query RealtorForsaleQuery($location: String!) {
    realtorForsaleQuery(location: $location)
      @rest(
        type: "Autocomplete"
        path: "/locations/auto-complete?input={args.location}"
      ) {
      autocomplete {
        area_type
        city
        country
        full_address
        line
        postal_code
        neighborhood
        slug_id
        state_code
      }
    }
  }
`;
