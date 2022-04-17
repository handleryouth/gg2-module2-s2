import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Rendering Custom Button', () => {
  it('should render Button', () => {
    const { getByTestId } = render(<Button title="Button" />)
    expect(getByTestId('button')).toBeTruthy()
  })

  it('should firethe onClick event', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button title="Button" toggleFunction={onClick} />)
    fireEvent.click(getByTestId('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
