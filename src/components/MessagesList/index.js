import React from 'react'
import Message from '../Message'

const MessagesList = ({ messages }) => (
  <div className="messages-list">
    {messages.map((item) => (
      <Message key={item.id} author={item.author} message={item.message} />
    ))}
  </div>
)

export default MessagesList
