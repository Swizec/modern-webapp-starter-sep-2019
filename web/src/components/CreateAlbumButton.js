import React from "react"
import { useAuth } from "react-use-auth"
import { Button, Box, Text } from "rebass"
import { useMutation } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"
import { Link } from "gatsby"

import { CREATE_ALBUM } from "../queries"

const CreateAlbumButton = ({ userId }) => {
  const [createAlbum, { data, loading }] = useMutation(CREATE_ALBUM, {
    variables: {
      userId,
    },
  })

  console.log(data)

  return (
    <Box>
      <Button onClick={createAlbum}>Create album</Button>
      {loading ? <BarLoader height={4} width={169} /> : null}
    </Box>
  )
}

export default CreateAlbumButton
