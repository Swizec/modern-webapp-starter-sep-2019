import { ApolloServer, gql } from "apollo-server-lambda"

import { album, allAlbum } from "./queries"
import { createAlbum } from "./mutations"

const typeDefs = gql`
  type Album {
    userId: String!
    albumId: String!
    createdAt: String
  }

  type Query {
    album(userId: String!, albumId: String!): Album
    allAlbum(userId: String): [Album]
  }

  type Mutation {
    createAlbum(userId: String!): Album
  }
`

const resolvers = {
  Query: {
    allAlbum,
    album,
  },
  Mutation: {
    createAlbum,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
