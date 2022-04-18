import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PlaylistDetail from './PlaylistDetail'

describe('Playlist Detail rendered', () => {
  it('should rendered', () => {
    const songTitle = 'song title'
    const songArtist = [
      {
        name: 'naoki sato',
        href: 'https://www.naokisato.com',
        id: '6161'
      }
    ]

    const { getByTestId } = render(<PlaylistDetail songTitle={songTitle} artists={songArtist} />)
    expect(getByTestId('playlist')).toBeInTheDocument()
  })
})
