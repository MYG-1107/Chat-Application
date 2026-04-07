import React from 'react'

const Sidebar = ({ users }) => (
  <div className="sidebar">
    <h2>Users</h2>
    {users.map((user) => (
      <p key={user} className="user">
        {user}
      </p>
    ))}
  </div>
)

export default Sidebar
