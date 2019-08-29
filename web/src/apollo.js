import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const SERVER_URI =
    "https://hkj1n72138.execute-api.us-east-1.amazonaws.com/dev/graphql"

export const client = new ApolloClient({
    uri: SERVER_URI,
    fetch,
})