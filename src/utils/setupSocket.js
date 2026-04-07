import { addMessage, updateUsers } from '../actions'

const setupSocket = (username, dispatch) => {
  const socket = new WebSocket('ws://localhost:8888')

  socket.addEventListener('open', () => {
    socket.send(
      JSON.stringify({
        type: 'ADD_USER',
        name: username,
      })
    )
  })

  socket.addEventListener('message', (event) => {
    let data
    try {
      data = JSON.parse(event.data)
    } catch (e) {
      return
    }
    switch (data.type) {
      case 'ADD_MESSAGE':
        dispatch(addMessage(data.message, data.author))
        break
      case 'UPDATE_USERS':
        dispatch(updateUsers(data.users))
        break
      default:
        break
    }
  })

  return socket
}

export default setupSocket
