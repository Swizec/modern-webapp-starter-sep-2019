import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql``;

const resolvers = {
    Query: {},
    Mutation: {}
};

const server = new ApolloServer({ typeDefs, resolvers });

export const handler = server.createHandler({
    cors: {
        origin: "*",
        credentials: true
    }
});
