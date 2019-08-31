import React from "react"
import { Link } from "gatsby"
import { Heading } from "rebass"
import { formatDistance } from "date-fns"
import { useAuth } from "react-use-auth"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageUpload from "../components/ImageUpload"

const AlbumPage = ({ pageContext }) => {
  const { isAuthenticated, user } = useAuth()
  const { albumId, userId, createdAt } = pageContext
  const date = new Date(createdAt)

  return (
    <Layout>
      <SEO title="Album" />
      <Heading>Album created {formatDistance(date, new Date())} ago</Heading>
      <ImageUpload albumId={albumId} />
    </Layout>
  )
}

export default AlbumPage
