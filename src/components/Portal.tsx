import { createPortal } from 'react-dom'
import { PortalProps } from 'types'

const Portal = ({ children, visible }: PortalProps) => {
  return visible ? createPortal(children, document.querySelector('#portal')!) : null
}

export default Portal
