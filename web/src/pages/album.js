import React, { useState } from "react"
import { Heading } from "rebass"
import { formatDistance } from "date-fns"
import { useAuth } from "react-use-auth"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageUpload from "../components/ImageUpload"
import ImagesList from "../components/ImagesList"

const AlbumPage = ({ pageContext }) => {
  const { isAuthenticated, user } = useAuth()
  const [images, setImages] = useState([])

  const { albumId, userId, createdAt } = pageContext
  const date = new Date(createdAt)

  const addImageToAlbum = img => setImages([img, ...images])

  return (
    <Layout>
      <SEO title="Album" />
      <Heading>
        Shared album created {formatDistance(date, new Date())} ago
      </Heading>
      <ImageUpload albumId={albumId} addImageToAlbum={addImageToAlbum} />
      <ImagesList images={images} />
    </Layout>
  )
}

export default AlbumPage
