import uuidv4 from "uuid/v4"
import { updateItem } from "./dynamodb"

export const createAlbum = async (_: any, { userId }: { userId: string }) => {
  const albumId = uuidv4()
  const createdAt = new Date().toISOString()

  const { Attributes } = await updateItem({
    Key: { userId, albumId },
    UpdateExpression: "SET createdAt = :createdAt",
    ExpressionAttributeValues: {
      ":createdAt": createdAt,
    },
    ReturnValues: "ALL_NEW",
  })

  return Attributes
}
