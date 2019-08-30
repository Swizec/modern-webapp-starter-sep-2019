/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(async resolve => {
    const result = await graphql(`
      query {
        albumapi {
          allAlbum {
            userId
            albumId
            createdAt
          }
        }
      }
    `)

    if (result) {
      result.data.albumapi.allAlbum.forEach(
        ({ userId, albumId, createdAt }) => {
          const albumPath = path.resolve("./src/pages/album.js")

          createPage({
            path: `/${albumId}`,
            component: albumPath,
            context: {
              userId,
              albumId,
              createdAt,
            },
          })
        }
      )
    } else {
      console.error("No result from albumapi")
    }

    resolve()
  })
}
