import React from "react"
import { Heading, Card, Image, Box } from "rebass"

export default ({ images }) => (
  <Box mt={20} mb={40}>
    {images.map(img => (
      <Card
        width={[128, 256]}
        key={img.imageId}
        m={[2, 3, 4]}
        sx={{ display: "inline-block" }}
      >
        <Image src={img.imageUrl} />
        <Heading fontSize={[2, 3, 4]}>{img.imageId}</Heading>
      </Card>
    ))}
  </Box>
)
