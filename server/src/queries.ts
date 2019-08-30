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
