import React from "react"
import { useAuth } from "react-use-auth"
import { Button, Box, Text } from "rebass"
import { useMutation } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"
import { Link } from "gatsby"

import { CREATE_ALBUM } from "../queries"

const CreateAlbum = ({ userId }) => {
  const [createAlbum, { data, loading }] = useMutation(CREATE_ALBUM, {
    variables: { userId },
  })

  if (!data) {
    return (
      <Box m={[2, 3, 4]}>
        <Button variant="secondary" onClick={createAlbum}>
          Create new album
        </Button>
        {loading ? <BarLoader height={4} width={169} /> : null}
      </Box>
    )
  } else {
    return (
      <Box m={[2, 3, 4]}>
        <Link to={`/${data.createAlbum.albumId}`}>
          <Text>Visit your album</Text>
        </Link>
      </Box>
    )
  }
}

const CreateAlbumButton = () => {
  const { isAuthenticated, user, login } = useAuth()

  if (isAuthenticated()) {
    return <CreateAlbum userId={user.sub} />
  } else {
    return (
      <Button onClick={login} variant="secondary" m={[2, 3, 4]}>
        Create your first album
      </Button>
    )
  }
}

export default CreateAlbumButton
