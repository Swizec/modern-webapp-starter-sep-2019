import React from "react"
import { Heading, Card, Image, Box, Flex, Text } from "rebass"
import { useMutation } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"

import { LIKE_IMAGE } from "../queries"

const VoteButton = ({ like, dislike, imageId, albumId }) => {
  const [likeImage, { loading }] = useMutation(LIKE_IMAGE, {
    variables: {
      like,
      dislike,
      imageId,
      albumId,
    },
  })

  return (
    <Text
      fontSize={[2, 3, 4]}
      width={1 / 2}
      sx={{ textAlign: "center", cursor: "pointer" }}
      onClick={likeImage}
    >
      {dislike ? "💔" : "💚"}
      {loading ? <BarLoader height={4} width={"100%"} /> : null}
    </Text>
  )
}

const ImageCard = ({ albumId, imageId, imageUrl }) => {
  return (
    <Card
      width={[128, 256]}
      key={imageId}
      m={[2, 3, 4]}
      sx={{ display: "inline-block" }}
    >
      <Image src={imageUrl} />
      <Flex>
        <VoteButton dislike albumId={albumId} imageId={imageId} />
        <VoteButton like albumId={albumId} imageId={imageId} />
      </Flex>
    </Card>
  )
}

export default ({ images, albumId }) => (
  <Box mt={20} mb={40}>
    {images
      .sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes))
      .map(img => (
        <ImageCard {...img} albumId={albumId} key={img.imageId} />
      ))}
  </Box>
)
