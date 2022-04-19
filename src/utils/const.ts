import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export interface FooterLink {
  name: string
  url?: string
  textDescription: string
  icon: IconType
}

export const FOOTER_LINK: FooterLink[] = [
  {
    name: 'github',
    url: 'https://github.com/handleryouth',
    textDescription: 'I put all my source code here',
    icon: FaGithub
  },
  {
    name: 'Email',
    textDescription: 'Email me: rafaeltonydavid@yahoo.com',
    icon: GrMail
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tonydg/',
    textDescription: "I'm on LinkedIn",
    icon: FaLinkedin
  }
]

export const PAGE_LINKS = [
  {
    path: '/new-release',
    text: 'New Releases'
  },
  {
    path: '/create-playlist',
    text: 'Create Playlist'
  },
  {
    path: '/albums',
    text: 'Albums'
  }
]
