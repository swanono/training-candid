import { gql } from "apollo-boost";

export const GET_CITIES = gql`
  {
    cities {
      nodes {
        id
        title
      }
    }
  }
`;
