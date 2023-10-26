import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get cards array for homepage grid"
    cards: [Card]
  }

  "A card holds information about each Pokemon"
  type Card {
    id: ID
    localId: String!
    name: String!
    image: String!
    rarity: String!
  }
`;
