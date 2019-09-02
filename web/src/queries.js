import gql from "graphql-tag"

export const CREATE_ALBUM = gql`
  mutation createAlbum($userId: String!) {
    createAlbum(userId: $userId) {
      albumId
    }
  }
`

export const GET_ALBUM = gql`
  query album($userId: String!, $albumId: String!) {
    album(userId: $userId, albumId: $albumId) {
      createdAt
      images {
        imageId
        imageUrl
      }
    }
  }
`

export const GET_PRESIGNED_UPLOAD_URL = gql`
  query presignedUploadUrl($albumId: String!) {
    presignedUploadUrl(albumId: $albumId) {
      uploadUrl
      readUrl
      expiresAt
      imageId
    }
  }
`

export const ADD_IMAGE = gql`
  mutation addImage($albumId: String!, $imageId: String!, $imageUrl: String!) {
    addImage(albumId: $albumId, imageId: $imageId, imageUrl: $imageUrl) {
      imageUrl
      createdAt
    }
  }
`

export const LIKE_IMAGE = gql`
  mutation likeImage(
    $albumId: String!
    $imageId: String!
    $like: Boolean
    $dislike: Boolean
  ) {
    likeImage(
      albumId: $albumId
      imageId: $imageId
      like: $like
      dislike: $dislike
    ) {
      likes
      dislikes
    }
  }
`
