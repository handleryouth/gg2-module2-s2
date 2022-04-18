import { render } from '@testing-library/react'
import Section from './Section'

describe('Rendering card detail', () => {
  it('should render card detail', () => {
    const { getByTestId } = render(<Section title="title" value="value" />)
    expect(getByTestId('card-detail')).toBeTruthy()
  })
})
