import React, { useState, useEffect } from "react"
import { Heading } from "rebass"
import { formatDistance } from "date-fns"
import { useAuth } from "react-use-auth"
import { useQuery } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ImageUpload from "../components/ImageUpload"
// import ImagesList from "../components/ImagesList"
// import { GET_ALBUM } from "../queries"

const AlbumPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Album" />
    </Layout>
  )
}

export default AlbumPage
