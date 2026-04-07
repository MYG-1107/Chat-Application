import React, { useState } from 'react'

const AddMessage = ({ addMessage, currentUser }) => {
  const [message, setMessage] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      addMessage(message, currentUser)
      setMessage('')
    }
  }

  return (
    <div className="add-message">
      <input
        type="text"
        placeholder="Type a message and press Enter..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default AddMessage
