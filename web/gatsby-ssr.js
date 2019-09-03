/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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
        auth0_domain="jamstack-sep-2019.auth0.com"
        auth0_client_id="YvrU5uJHFyEgfszJLjtfS4mLrOU9dZIF"
      >
        {element}
      </AuthProvider>
    </ThemeProvider>
  </ApolloProvider>
)
