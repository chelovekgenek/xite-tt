import React from "react"
import { Provider } from "react-redux"

import { store } from "store"
import { Playlist } from "components/Playlist"
import { Player } from "components/Player"

import { GlobalStyles, MainLayout, Col } from "./App.styled"

export const App: React.FC = () => (
  <Provider store={store}>
    <MainLayout>
      <GlobalStyles />
      <Col span={4}>
        <Playlist />
      </Col>
      <Col span={20}>
        <Player />
      </Col>
    </MainLayout>
  </Provider>
)
