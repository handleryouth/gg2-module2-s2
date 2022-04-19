import '@testing-library/jest-dom'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
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
    expect(getByTestId('song-list')).toBeInTheDocument()
  })

  it('hiding state must be changed', () => {
    const setStateSpy = jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [true, jest.fn()]) // to make the state change
      .mockImplementationOnce(() => [null, () => null]) //to make sure that the second call is not called

    render(<SongList selectedSongs={selectedSong} setSelected={jest.fn()} />)

    expect(setStateSpy).toBeCalledTimes(2)
  })
})
