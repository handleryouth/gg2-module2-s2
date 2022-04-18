import '@testing-library/jest-dom'
import { FormEvent } from 'react'
import { fireEvent, render } from '@testing-library/react'
import PlaylistForm from './PlaylistForm'

describe('Playlist form rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(<PlaylistForm toggleSubmit={() => null} />)
    expect(getByTestId('playlist-form')).toBeInTheDocument()
  })

  it('input value should be changed', () => {
    const { getAllByTestId } = render(<PlaylistForm toggleSubmit={() => null} />)
    const input = getAllByTestId('custom-input') as HTMLInputElement[]
    input[0].value = 'test'
    input[1].value = ''
    expect(input[0].value).toBe('test')
    expect(input[1].value).toBe('')
  })

  it('function should be running', () => {
    const submit = jest.fn((e: FormEvent<HTMLFormElement>) => e.preventDefault())
    const { getByTestId } = render(<PlaylistForm toggleSubmit={(e) => submit(e)} />)

    const button = getByTestId('button')
    fireEvent.click(button)
    expect(submit).toHaveBeenCalled()
  })
})
