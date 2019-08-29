import React from "react"
import { useAuth } from "react-use-auth"
import { Button } from "rebass"

const CreateAlbumButton = () => {
  const { isAuthenticated, user, login } = useAuth()

  if (isAuthenticated()) {
    return <Button variant="secondary">Create new album</Button>
  } else {
    return (
      <Button onClick={login} variant="secondary" m={[2, 3, 4]}>
        Create your first album
      </Button>
    )
  }
}

export default CreateAlbumButton
