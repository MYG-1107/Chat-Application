import React from 'react'
import './App.css'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import MessagesListContainer from './components/MessagesList/MessagesListContainer'
import AddMessageContainer from './components/AddMessage/AddMessageContainer'

const App = () => (
  <div className="app">
    <SidebarContainer />
    <MessagesListContainer />
    <AddMessageContainer />
  </div>
)

export default App
