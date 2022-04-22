import '@testing-library/jest-dom'
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SongList from './SongList'

const selectedSong = [
  {
    name: 'the great escape',
    id: '1232313123223'
  },
  {
    name: 'Air on the G string',
    id: '1234'
  }
]

afterEach(() => {
  cleanup()
})

describe('Songlist rendered', () => {
  it('should rendered', () => {
    const handleSelected = jest.fn()

    const { getByTestId } = render(
      <SongList selectedSongs={selectedSong} setSelected={handleSelected} />
    )

    const button = getByTestId('button')

    fireEvent.click(button)

    expect(getByTestId('song-list')).toBeInTheDocument()
  })

  it('hiding state must be changed', () => {
    const setStateMock = jest.fn()
    const useStateMock = (initialState: boolean) => [initialState, setStateMock]

    jest.spyOn(React, 'useState').mockImplementation(useStateMock as jest.Mock)

    const { getByTestId } = render(
      <SongList selectedSongs={selectedSong} setSelected={jest.fn()} />
    )

    const button = getByTestId('button')

    fireEvent.click(button)

    expect(setStateMock).toHaveBeenCalledWith(true)
  })
})
