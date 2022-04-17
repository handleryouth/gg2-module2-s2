import { render } from '@testing-library/react'
import Layout from './Layout'

describe('layout rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(<Layout component={<div data-testid="children-div"> </div>} />)
    expect(getByTestId('layout')).toBeTruthy()
    expect(getByTestId('children-div')).toBeTruthy()
  })
})
