import React from "react"
import { Heading, Card, Image, Box } from "rebass"

export default ({ images }) => (
  <Box mt={20} mb={40}>
    {images.map(img => (
      <Card width={[512, 256, 384]} key={img.imageId}>
        <Image src={img.imageUrl} />
        <Heading fontSize={[2, 3, 4]}>{img.imageId}</Heading>
      </Card>
    ))}
  </Box>
)
