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

export interface AlbumProps {
  album_type: string
  name: string
  artists: ArtistProps[]
  id: string
  release_date: string
  total_tracks: number
  images: ImageData[]
  tracks: { items: SpotifySearchResponse[] }
}

export interface AlbumsResponseData {
  items: AlbumProps[]
  limit: number
  offset: number
  total: number
}
