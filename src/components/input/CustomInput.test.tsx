import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Input from './CustomInput'

describe('Rendering input component', () => {
  it('should render input correctly', () => {
    const { getByTestId } = render(
      <Input label="Song link" placeholder="Fill with song link" toggleChange={() => null} />
    )
    expect(getByTestId('custom-input')).toBeTruthy()
  })

  it('should change the input value', () => {
    const { getByTestId } = render(
      <Input label="Song link" placeholder="Fill with song link" toggleChange={() => null} />
    )
    const input = getByTestId('custom-input')
    fireEvent.change(input, { target: { value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' } })
    expect((input as HTMLInputElement).value).toBe('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  })
})
