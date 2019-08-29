import { getItem } from "./dynamodb"

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
