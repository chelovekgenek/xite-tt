import React from "react"

import { List } from "components/commons"
import NewRecord from "./NewRecord"
import Records from "./Records"

export const Playlist = () => (
  <List>
    <NewRecord />
    <Records />
  </List>
)
