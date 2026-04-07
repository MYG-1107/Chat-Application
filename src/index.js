import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reducer from './reducers'
import { addUser } from './actions'
import setupSocket from './utils/setupSocket'
import saga from './sagas'
import name from './utils/name'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

const socket = setupSocket(name, store.dispatch)

sagaMiddleware.run(saga, socket)

store.dispatch(addUser(name))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
