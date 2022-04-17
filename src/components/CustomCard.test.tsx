import { render } from '@testing-library/react'
import axios from 'axios'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { SpotifySearchResponse } from 'types'
import CustomCard from './CustomCard'

const server = setupServer(
  rest.get('/mockapi', (_req, res, ctx) => {
    return res(
      ctx.json({
        name: 'naoki sato',
        id: '12345',
        track_number: 1,
        artists: [
          {
            href: 'https://api.spotify.com/v1/artists/1hlpldRj6GZ2naD4XDqi80',
            id: '1hlpldRj6GZ2naD4XDqi80',
            name: 'naoki sato'
          }
        ],
        album: {
          release_date: '2020-01-01',
          images: [
            {
              height: 640,
              width: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273e52ca76a206a2b0c0a2f50d5'
            }
          ]
        }
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Rendering card', () => {
  it('should render card ', async () => {
    const data = await axios.get('/mockapi').then((res) => res.data)

    const { getByTestId } = render(
      <CustomCard
        artist={(data as SpotifySearchResponse).artists}
        date={(data as SpotifySearchResponse).album.release_date}
        image={(data as SpotifySearchResponse).album.images[0].url}
        title={(data as SpotifySearchResponse).name}
        totalTracks={(data as SpotifySearchResponse).track_number}
        toggleSelected={() => null}
        toggleDeselected={() => null}
        selectCondition={false}
      />
    )
    expect(getByTestId('card')).toBeTruthy()
  })
})
