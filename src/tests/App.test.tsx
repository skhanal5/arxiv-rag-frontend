import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Random Component', () => {
  it('renders correctly', () => {
    render(<App />)
    screen.debug() // Logs the DOM structure
    const element = screen.getByText('Vite + React')
    expect(element).toBeInTheDocument()
  })
})
