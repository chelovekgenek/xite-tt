import { List as CList } from "./List"
import { Item as CItem } from "./Item"

export const List = Object.assign(CList, {
  Item: CItem,
})
