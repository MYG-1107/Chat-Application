import * as ActionTypes from './ActionTypes'

export const addMessage = (message, author) => ({
  type: ActionTypes.ADD_MESSAGE,
  message,
  author,
})

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  user,
})

export const sendMessage = (message) => ({
  type: ActionTypes.SEND_MESSAGE,
  message,
})

export const updateUsers = (users) => ({
  type: ActionTypes.UPDATE_USERS,
  users,
})
