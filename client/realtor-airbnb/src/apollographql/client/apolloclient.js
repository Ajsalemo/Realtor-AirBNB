import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// Using RestLink to call a 3rd party REST API instead of a Graphql server
const restLink = new RestLink({
  uri: `${process.env.REACT_APP_RAPID_API_REST_API_URL}`,
  headers: {
    "x-rapidapi-host": `${process.env.REACT_APP_RAPID_API_HOST}`,
    "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
