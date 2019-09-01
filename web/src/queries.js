import gql from "graphql-tag"

export const CREATE_ALBUM = gql`
  mutation createAlbum($userId: String!) {
    createAlbum(userId: $userId) {
      albumId
    }
  }
`

export const GET_PRESIGNED_UPLOAD_URL = gql`
  query presignedUploadUrl($albumId: String!) {
    presignedUploadUrl(albumId: $albumId) {
      uploadUrl
      readUrl
      expiresAt
    }
  }
`
