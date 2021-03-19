import { gql } from "@apollo/client";

export const AUTO_COMPLETE_QUERY = gql`
  query AutoCompleteQuery($location: String!) {
    autoCompleteQuery(location: $location)
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
