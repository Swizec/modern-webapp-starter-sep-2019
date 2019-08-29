/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"
import { ApolloProvider } from "react-apollo-hooks"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

import { client } from "./src/apollo"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <AuthProvider
        navigate={navigate}
        auth0_domain="shared-photo-album.auth0.com"
        auth0_client_id="45SgKWXNAGQAVuHLPs91IkaYSz1Pg5g7"
      >
        {element}
      </AuthProvider>
    </ThemeProvider>
  </ApolloProvider>
)
