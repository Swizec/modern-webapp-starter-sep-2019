import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Box, Text } from "rebass"
import { useQuery } from "react-apollo-hooks"
import { BeatLoader } from "react-spinners"

import { GET_PRESIGNED_UPLOAD_URL } from "../queries"

function useS3Upload({
  onUploadStart,
  onUploadReady,
  onError,
  presignedUploadUrl,
}) {
  const [uploading, setUploading] = useState(false)

  async function onDrop([pendingImage]) {
    // Let the caller know that a file has been selected and a fetch is beginning.
    onUploadStart && onUploadStart()
    setUploading(true)

    // Upload the image to our pre-signed URL.
    const response = await fetch(
      new Request(presignedUploadUrl, {
        method: "PUT",
        body: pendingImage,
        headers: new Headers({
          "Content-Type": "image/*",
        }),
      })
    )

    if (response.status !== 200) {
      // The upload failed, so let's notify the caller.
      setUploading(false)
      onError && onError()
      return
    }
    // Let the caller know that the upload is done, so that it can send the URL
    // to the backend again, persisting it to the database.

    setUploading(false)
    onUploadReady && onUploadReady()
  }

  return {
    ...useDropzone({
      accept: "image/*",
      disabled: typeof presignedUploadUrl !== "string",
      onDrop,
    }),
    uploading,
  }
}

export default ({ albumId, addImageToAlbum }) => {
  const { data, error, loading } = useQuery(GET_PRESIGNED_UPLOAD_URL, {
    variables: {
      albumId: albumId,
    },
  })
  const { getRootProps, getInputProps, uploading } = useS3Upload({
    presignedUploadUrl: data && data.presignedUploadUrl.uploadUrl,
    onUploadReady: () => addImageToAlbum(data.presignedUploadUrl.readUrl),
  })

  if (loading || uploading) {
    return (
      <Box sx={{ textAlign: "center" }} p={[3, 4, 5]}>
        <BeatLoader size={15} />
      </Box>
    )
  }

  return (
    <Box sx={{ textAlign: "center" }} {...getRootProps()}>
      <input {...getInputProps()} />
      <Text p={[3, 4, 5]}>Drop an image or click to select</Text>
    </Box>
  )
}
