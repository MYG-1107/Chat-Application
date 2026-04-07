const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8888 })

let users = []

const broadcast = (data) => {
  const message = JSON.stringify(data)
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

const broadcastExcept = (excludeWs, data) => {
  const message = JSON.stringify(data)
  wss.clients.forEach((client) => {
    if (client !== excludeWs && client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

wss.on('connection', (ws) => {
  let currentUser = null

  ws.on('message', (rawMessage) => {
    let data
    try {
      data = JSON.parse(rawMessage)
    } catch (e) {
      return
    }

    switch (data.type) {
      case 'ADD_USER': {
        let username = data.name
        if (users.includes(username)) {
          let counter = 1
          while (users.includes(`${username}${counter}`)) {
            counter++
          }
          username = `${username}${counter}`
        }
        currentUser = username
        users.push(currentUser)
        broadcast({ type: 'UPDATE_USERS', users })
        break
      }
      case 'ADD_MESSAGE':
        broadcastExcept(ws, {
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author,
        })
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    if (currentUser) {
      users = users.filter((user) => user !== currentUser)
      broadcast({ type: 'UPDATE_USERS', users })
    }
  })
})

console.log('WebSocket server running on ws://localhost:8888')
