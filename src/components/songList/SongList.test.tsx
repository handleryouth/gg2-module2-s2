import { useState as useStateMock } from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
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
  jest.clearAllMocks()
})

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

describe('Songlist rendered', () => {
  const setState = jest.fn()
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(useStateMock as jest.Mock).mockImplementation((init) => [init, setState])
  })

  it('should rendered', () => {
    const handleSelected = jest.fn()

    const { getByTestId } = render(
      <SongList selectedSongs={selectedSong} setSelected={handleSelected} />
    )
    expect(getByTestId('song-list')).toBeInTheDocument()
  })

  it('hiding state must be changed', () => {
    const handleSelected = jest.fn()

    const { getAllByTestId } = render(
      <SongList selectedSongs={selectedSong} setSelected={handleSelected} />
    )
    const button = getAllByTestId('button')
    fireEvent.click(button[0])
    fireEvent.click(button[0])
    expect(setState).toBeCalledTimes(2)
  })
})
