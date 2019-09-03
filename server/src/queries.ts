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

  return result.Item
}
