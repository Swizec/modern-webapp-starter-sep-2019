import React, { useState } from "react"
import { Link } from "gatsby"
import { Heading, Card, Image, Box } from "rebass"
import { formatDistance } from "date-fns"
import { useAuth } from "react-use-auth"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageUpload from "../components/ImageUpload"

const AlbumPage = ({ pageContext }) => {
  const { isAuthenticated, user } = useAuth()
  const [images, setImages] = useState([])

  const { albumId, userId, createdAt } = pageContext
  const date = new Date(createdAt)

  const addImageToAlbum = url => setImages([url, ...images])

  return (
    <Layout>
      <SEO title="Album" />
      <Heading>
        Shared album created {formatDistance(date, new Date())} ago
      </Heading>
      <ImageUpload albumId={albumId} addImageToAlbum={addImageToAlbum} />

      <Box mt={20} mb={40}>
        {images.map(img => (
          <Card width={[512, 256, 384]}>
            <Image src={img} />
            <Heading fontSize={[2, 3, 4]}>Image</Heading>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default AlbumPage
