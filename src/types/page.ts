import { ArtistProps } from './component'

export interface PlaylistProps {
  name: string
  id: string
}

export interface ImageData {
  height: number
  url: string
  width: number
}

export interface SpotifySearchResponse {
  name: string
  id: string
  track_number: number
  artists: ArtistProps[]
  album: {
    release_date: string
    images: ImageData[]
  }
}
