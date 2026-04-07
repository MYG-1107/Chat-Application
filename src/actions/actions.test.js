import * as Actions from './index'
import * as ActionTypes from './ActionTypes'

describe('Action Creators', () => {
  test('addMessage creates ADD_MESSAGE action', () => {
    const message = 'Hello!'
    const author = 'User1'
    const action = Actions.addMessage(message, author)
    expect(action.type).toEqual(ActionTypes.ADD_MESSAGE)
    expect(action.message).toEqual(message)
    expect(action.author).toEqual(author)
  })

  test('addUser creates ADD_USER action', () => {
    const user = 'Alice'
    const action = Actions.addUser(user)
    expect(action.type).toEqual(ActionTypes.ADD_USER)
    expect(action.user).toEqual(user)
  })

  test('sendMessage creates SEND_MESSAGE action', () => {
    const message = 'Test message'
    const action = Actions.sendMessage(message)
    expect(action.type).toEqual(ActionTypes.SEND_MESSAGE)
    expect(action.message).toEqual(message)
  })

  test('updateUsers creates UPDATE_USERS action', () => {
    const users = ['Alice', 'Bob']
    const action = Actions.updateUsers(users)
    expect(action.type).toEqual(ActionTypes.UPDATE_USERS)
    expect(action.users).toEqual(users)
  })
})
