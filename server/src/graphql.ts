import { ApolloServer, gql } from "apollo-server-lambda"

import { album, allAlbum, presignedUploadUrl } from "./queries"
import { createAlbum, addImage, likeImage } from "./mutations"

const typeDefs = gql`
  type Album {
    userId: String!
    albumId: String!
    createdAt: String
    images: [Image]
  }

  type Image {
    albumId: String!
    imageId: String!
    imageUrl: String
    createdAt: String
    likes: Number
    dislikes: Number
  }

  type PresignedUrl {
    uploadUrl: String
    readUrl: String
    imageId: String
    expiresAt: String
  }

  type Query {
    album(userId: String!, albumId: String!): Album
    allAlbum(userId: String): [Album]
    presignedUploadUrl(albumId: String!): PresignedUrl
  }

  type Mutation {
    createAlbum(userId: String!): Album
    addImage(albumId: String!, imageId: String!, imageUrl: String!): Image
    likeImage(
      albumId: String!
      imageId: String!
      like: Boolean
      dislike: Boolean
    ): Image
  }
`

const resolvers = {
  Query: {
    allAlbum,
    album,
    presignedUploadUrl,
  },
  Mutation: {
    createAlbum,
    addImage,
    likeImage,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
