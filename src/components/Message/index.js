import React from 'react'

const Message = ({ author, message }) => (
  <p className="message">
    <strong>{author}</strong>: {message}
  </p>
)

export default Message
