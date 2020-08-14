import { gql } from '@apollo/react-hooks';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

`;

export const resolvers = {};