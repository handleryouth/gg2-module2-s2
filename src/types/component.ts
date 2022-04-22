/* eslint-disable no-unused-vars */
import { ChangeEvent, Dispatch, HTMLProps, ReactNode, RefObject, SetStateAction } from 'react'
import { PaginatorPageState } from 'primereact/paginator'
import { Toast } from 'primereact/toast'
import { IconType } from 'react-icons'
import { ImageData } from 'types/page'

export interface ButtonProps {
  className?: string
  children: ReactNode | string
  toggleFunction?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
}

export interface TooltipProps {
  target: string
  text: string
  textslice?: string
  icon?: ReactNode
}

export interface FooterLink {
  name: string
  url?: string
  textDescription: string
  icon: IconType
}

export interface SeoProps {
  title?: string
  description?: string
}

export interface UserData {
  display_name: string
  followers: {
    total: number
    href: string
  }
  images: ImageData[]
  id: string
}

export interface SectionProps {
  title: string
  value: string | ReactNode
}

export interface ArtistProps {
  href: string
  id: string
  name: string
}

export interface CustomCardProps {
  image: string
  id: string
  title: string
  artist: ArtistProps[]
  date: string
  totalTracks: number
  toggleSelected?: () => void
  toggleDeselected?: () => void
  selectCondition?: boolean
  enabledDetails?: boolean
  allowSelect?: boolean
}

export interface PaginationProps {
  page: number
  handlePageChange: (event: PaginatorPageState) => void
  resultsLength: number
}

export interface CustomToastProps {
  customRef: RefObject<Toast>
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  innerRef?: RefObject<HTMLInputElement>
  toggleChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface InputFormRef {
  uris: string
  position: string
}

export interface ItemFormProps {
  toggleSubmit: (e: React.FormEvent<HTMLFormElement>, inputForm: InputFormRef) => void
  toggleCancel: () => void
}

export interface LayoutProps {
  component: ReactNode
}

export interface PlaylistDetailProps {
  songTitle: string
  artists: ArtistProps[]
}

export interface PlaylistDataProps {
  name: string
  description: string
}

export interface PlaylistFormProps {
  toggleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    playlistData: PlaylistDataProps,
    formRef: HTMLFormElement
  ) => void
  name?: string
  description?: string
  customFormClassName?: string
}

export interface PlaylistListProps {
  playlistName: string
  id: string
  selectedSong: string[]
}

export interface PlaylistItems {
  track: {
    name: ''
    artists: ArtistProps[]
  }
}

export interface PortalProps {
  children: React.ReactNode
  visible: boolean
}

export interface SelectedSongProps {
  id: string
  name: string
}

export interface SongListProps {
  selectedSongs: SelectedSongProps[]
  setSelected: Dispatch<SetStateAction<SelectedSongProps[]>>
}
