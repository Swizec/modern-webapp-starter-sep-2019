import gql from 'graphql-tag'

export const CREATE_ALBUM = gql `
    mutation createAlbum($userId: String!) {
        createAlbum(userId: $userId) {
            albumId
        }
    }
`