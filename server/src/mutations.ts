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

export const addImage = async (
  _: any,
  {
    albumId,
    imageId,
    imageUrl,
  }: { albumId: string; imageId: string; imageUrl: string }
) => {
  const createdAt = new Date().toISOString()

  const { Attributes } = await updateItem({
    TableName: process.env.IMAGES_TABLE,
    Key: { albumId, imageId },
    UpdateExpression:
      "SET createdAt = :createdAt, imageUrl = :imageUrl, likes = :likes, dislikes = :dislikes",
    ExpressionAttributeValues: {
      ":createdAt": createdAt,
      ":imageUrl": imageUrl,
      ":likes": 0,
      ":dislikes": 0,
    },
    ReturnValues: "ALL_NEW",
  })

  return Attributes
}

export const likeImage = async (
  _: any,
  {
    albumId,
    imageId,
    like,
    dislike,
  }: { albumId: string; imageId: string; like: boolean; dislike: boolean }
) => {
  const { Attributes } = await updateItem({
    TableName: process.env.IMAGES_TABLE,
    Key: { albumId, imageId },
    UpdateExpression:
      "SET likes = likes + :likes, dislikes = dislikes + :dislikes",
    ExpressionAttributeValues: {
      ":likes": like ? 1 : 0,
      ":dislikes": dislike ? 1 : 0,
    },
    ReturnValues: "ALL_NEW",
  })

  return Attributes
}
