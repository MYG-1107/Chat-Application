import React from 'react'
import { render, screen } from '@testing-library/react'
import MessagesList from './index'

describe('MessagesList Component', () => {
  test('renders all messages', () => {
    const messages = [
      { id: 1, author: 'Alice', message: 'Hello!' },
      { id: 2, author: 'Bob', message: 'Hi there!' },
    ]
    render(<MessagesList messages={messages} />)
    expect(screen.getByText(/Alice/)).toBeInTheDocument()
    expect(screen.getByText(/Hello!/)).toBeInTheDocument()
    expect(screen.getByText(/Bob/)).toBeInTheDocument()
    expect(screen.getByText(/Hi there!/)).toBeInTheDocument()
  })

  test('renders empty list with no messages', () => {
    const { container } = render(<MessagesList messages={[]} />)
    expect(container.querySelectorAll('.message')).toHaveLength(0)
  })
})
