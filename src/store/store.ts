import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { persistStore } from "redux-persist"

import { reducers, sagas } from "./entities"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

sagaMiddleware.run(sagas)
