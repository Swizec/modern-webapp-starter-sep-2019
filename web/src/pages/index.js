import React from "react"
import { Link } from "gatsby"
import { Heading, Button, Text } from "rebass"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CreateAlbumButton from "../components/CreateAlbumButton"
import { useAuth } from "react-use-auth"

const IndexPage = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>
        {isAuthenticated() ? `Welcome back ${user.name}!` : "HI!"}
      </Heading>
      <Text pb={1}>Welcome to your shared space for vacation photos.</Text>
      <Text pb={1}>Now go create fun memories.</Text>
      <CreateAlbumButton />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
