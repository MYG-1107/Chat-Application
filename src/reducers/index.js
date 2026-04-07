import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
  messages: [],
  users: [],
  currentUser: null,
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: Date.now() + Math.random(), author: action.author, message: action.message },
        ],
      }
    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        currentUser: action.user,
      }
    case ActionTypes.UPDATE_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      return state
  }
}

export default chatReducer
