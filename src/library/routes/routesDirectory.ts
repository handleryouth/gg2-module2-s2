import { Album, AlbumDetail, Home, NewReleases } from 'pages'
import { RoutesProps } from 'types'

export const routesDirectory: RoutesProps[] = [
  {
    path: '/create-playlist',
    component: Home
  },
  {
    path: '/new-release',
    component: NewReleases
  },
  {
    path: '/albums/:id',
    component: AlbumDetail
  },
  {
    path: '/albums',
    component: Album,
    exact: true
  }
]
