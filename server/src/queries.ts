import AWS from "aws-sdk"
import uuidv4 from "uuid/v4"
import { addSeconds } from "date-fns"

import { getItem, scanItems } from "./dynamodb"

export const album = async (
  _: any,
  { userId, albumId }: { userId: string; albumId: string }
) => {
  const result = await getItem({ Key: { userId, albumId } })

  if (!result.Item) {
    return {}
  }

  return { ...result.Item }
}

export const allAlbum = async (_: any, { userId }: { userId?: string }) => {
  const result = await scanItems(
    userId
      ? {
          FilterExpression: "#user = :userId",
          ExpressionAttributeNames: { "#user": "userId" },
          ExpressionAttributeValues: { ":userId": userId },
        }
      : {}
  )

  if (!result.Items) {
    return []
  }

  return result.Items
}

const S3 = new AWS.S3({
  signatureVersion: "v4",
})
// in production you would use AWS SecretsManager for these
// here we create a example user with full S3 access
AWS.config.update({
  accessKeyId: "AKIAVGA6PM7ANUHVNA7V",
  secretAccessKey: "MDgdauT5LppdKvzk//+eJ0uFgdJ7MKCCb00Nd56d",
})

export const presignedUploadUrl = async (
  _: any,
  { albumId }: { albumId: string }
) => {
  const filename = `${uuidv4()}`
  const expireSeconds = 60 * 5

  const url = S3.getSignedUrl("putObject", {
    Bucket: process.env.S3_BUCKET,
    Key: filename,
    Expires: expireSeconds,
  })

  return {
    url,
    expiresAt: addSeconds(new Date(), expireSeconds),
  }
}
