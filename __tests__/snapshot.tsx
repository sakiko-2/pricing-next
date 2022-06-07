import { render } from '@testing-library/react'
import Home from '../pages/index'

test('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
