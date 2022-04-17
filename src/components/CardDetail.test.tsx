import { render } from '@testing-library/react'
import CardDetail from './CardDetail'

describe('Rendering card detail', () => {
  it('should render card detail', () => {
    const { getByTestId } = render(<CardDetail title="title" value="value" />)
    expect(getByTestId('card-detail')).toBeTruthy()
  })
})
