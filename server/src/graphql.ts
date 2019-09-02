import { ApolloServer, gql } from "apollo-server-lambda"

import {} from "./queries"
import {} from "./mutations"

const typeDefs = gql`
  type Query {
  }

  type Mutation {
    
  }
`

const resolvers = {
  Query: {},
  Mutation: {},
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
