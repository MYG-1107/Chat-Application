import { takeEvery, call } from 'redux-saga/effects'
import * as ActionTypes from '../actions/ActionTypes'

function sendMessage(socket, action) {
  socket.send(
    JSON.stringify({
      type: ActionTypes.ADD_MESSAGE,
      message: action.message,
      author: action.author,
    })
  )
}

function* handleAddMessage(socket, action) {
  yield call(sendMessage, socket, action)
}

function* saga(socket) {
  yield takeEvery(ActionTypes.ADD_MESSAGE, handleAddMessage, socket)
}

export default saga
