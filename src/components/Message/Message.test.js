import React from 'react'
import { render, screen } from '@testing-library/react'
import Message from './index'

describe('Message Component', () => {
  test('renders author and message', () => {
    render(<Message author="Alice" message="Hello!" />)
    expect(screen.getByText(/Alice/)).toBeInTheDocument()
    expect(screen.getByText(/Hello!/)).toBeInTheDocument()
  })

  test('renders author in bold', () => {
    render(<Message author="Bob" message="Test message" />)
    const authorEl = screen.getByText('Bob')
    expect(authorEl.tagName).toBe('STRONG')
  })
})
