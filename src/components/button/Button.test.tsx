import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Rendering Custom Button', () => {
  it('should render Button', () => {
    const { getByTestId } = render(<Button>title</Button>)
    expect(getByTestId('button')).toBeInTheDocument()
  })

  it('should firethe onClick event', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button toggleFunction={onClick}>Button</Button>)
    fireEvent.click(getByTestId('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
