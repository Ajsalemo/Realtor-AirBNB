import { gql } from "@apollo/client";

export const REALTOR_FORSALE_QUERY = gql`
  query RealtorForsaleQuery($location: String!) {
    realtorForsaleQuery(location: $location)
      @rest(
        type: "Autocomplete"
        path: "/locations/auto-complete?input={args.location}"
      ) {
      autocomplete {
        city
        state_code
        country
        slug_id
      }
    }
  }
`;
