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
            images {
              imageId
              imageUrl
            }
          }
        }
      }
    `)

    if (result) {
      result.data.albumapi.allAlbum.forEach(album => {
        const albumPath = path.resolve("./src/pages/album.js")

        createPage({
          path: `/${album.albumId}`,
          component: albumPath,
          context: album,
        })
      })
    } else {
      console.error("No result from albumapi")
    }

    resolve()
  })
}
