import React from "react"
import { Link } from "gatsby"
import { Heading, Button, Text } from "rebass"
import { formatDistance } from "date-fns"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth } from "react-use-auth"

const AlbumPage = ({ pageContext }) => {
  const { isAuthenticated, user } = useAuth()
  const { albumId, userId, createdAt } = pageContext
  const date = new Date(createdAt)

  return (
    <Layout>
      <SEO title="Album" />
      <Heading>Album created {formatDistance(date, new Date())} ago</Heading>
    </Layout>
  )
}

export default AlbumPage
