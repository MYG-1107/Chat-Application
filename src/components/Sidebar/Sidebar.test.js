import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from './index'

describe('Sidebar Component', () => {
  test('renders users list', () => {
    const users = ['Alice', 'Bob']
    render(<Sidebar users={users} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })

  test('renders Users heading', () => {
    render(<Sidebar users={[]} />)
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  test('renders empty sidebar with no users', () => {
    const { container } = render(<Sidebar users={[]} />)
    expect(container.querySelectorAll('.user')).toHaveLength(0)
  })
})
