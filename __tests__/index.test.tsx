import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  test('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /our pricing/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
