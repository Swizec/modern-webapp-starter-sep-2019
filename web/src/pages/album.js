import React, { useState, useEffect } from "react"
import { Heading } from "rebass"
import { formatDistance } from "date-fns"
import { useAuth } from "react-use-auth"
import { useQuery } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageUpload from "../components/ImageUpload"
import ImagesList from "../components/ImagesList"
import { GET_ALBUM } from "../queries"

const AlbumPage = ({ pageContext }) => {
  const { isAuthenticated, user } = useAuth()
  const [images, setImages] = useState(pageContext.images || [])
  const { albumId, userId, createdAt } = pageContext

  // update image list from source
  const { data, loading } = useQuery(GET_ALBUM, {
    variables: { userId, albumId },
  })
  useEffect(() => {
    if (data && data.album) {
      setImages(data.album.images)
    }
  }, [loading])

  const date = new Date(createdAt)

  const addImageToAlbum = img => setImages([img, ...images])

  return (
    <Layout>
      <SEO title="Album" />
      <Heading>
        Shared album created {formatDistance(date, new Date())} ago
      </Heading>
      <ImageUpload albumId={albumId} addImageToAlbum={addImageToAlbum} />
      {loading ? <BarLoader height={4} width={"100%"} /> : null}
      <ImagesList images={images} albumId={albumId} />
    </Layout>
  )
}

export default AlbumPage
