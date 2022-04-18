import { render } from '@testing-library/react'
import axios from 'axios'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { PlaylistListProps } from 'types'
import PlaylistList from './PlaylistList'

const server = setupServer(
  rest.get('/mockapi', (_req, res, ctx) => {
    return res(
      ctx.json({
        playlistName: 'test',
        id: '123445',
        selectedSong: [
          {
            name: 'naoki sato',
            id: '1232313123223'
          }
        ]
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('should render playlist list', () => {
  it('should render correctly', async () => {
    const data = await axios.get('/mockapi').then((res) => res.data)
    const { getByTestId } = render(
      <PlaylistList
        id={(data as PlaylistListProps).id}
        selectedSong={(data as PlaylistListProps).selectedSong}
        playlistName={(data as PlaylistListProps).playlistName}
      />
    )
    expect(getByTestId('playlist-list')).toBeTruthy()
  })
})
