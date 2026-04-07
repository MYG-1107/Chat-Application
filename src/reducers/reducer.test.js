import reducer from './index'
import * as ActionTypes from '../actions/ActionTypes'

describe('Chat Reducer', () => {
  test('returns the initial state', () => {
    const state = reducer(undefined, {})
    expect(state.messages).toEqual([])
    expect(state.users).toEqual([])
    expect(state.currentUser).toBeNull()
  })

  test('handles ADD_MESSAGE', () => {
    const state = reducer(undefined, {
      type: ActionTypes.ADD_MESSAGE,
      message: 'Hello',
      author: 'User1',
    })
    expect(state.messages).toHaveLength(1)
    expect(state.messages[0].message).toEqual('Hello')
    expect(state.messages[0].author).toEqual('User1')
    expect(state.messages[0].id).toBeDefined()
  })

  test('handles multiple ADD_MESSAGE actions', () => {
    let state = reducer(undefined, {
      type: ActionTypes.ADD_MESSAGE,
      message: 'Hello',
      author: 'User1',
    })
    state = reducer(state, {
      type: ActionTypes.ADD_MESSAGE,
      message: 'World',
      author: 'User2',
    })
    expect(state.messages).toHaveLength(2)
    expect(state.messages[1].message).toEqual('World')
    expect(state.messages[1].author).toEqual('User2')
  })

  test('handles ADD_USER', () => {
    const state = reducer(undefined, {
      type: ActionTypes.ADD_USER,
      user: 'Alice',
    })
    expect(state.users).toContain('Alice')
    expect(state.currentUser).toEqual('Alice')
  })

  test('handles UPDATE_USERS', () => {
    const users = ['Alice', 'Bob', 'Charlie']
    const state = reducer(undefined, {
      type: ActionTypes.UPDATE_USERS,
      users,
    })
    expect(state.users).toEqual(users)
  })

  test('returns unchanged state for unknown actions', () => {
    const initialState = { messages: [], users: [], currentUser: null }
    const state = reducer(initialState, { type: 'UNKNOWN_ACTION' })
    expect(state).toEqual(initialState)
  })
})
