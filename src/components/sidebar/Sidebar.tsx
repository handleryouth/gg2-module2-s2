import { deactivateSidebar, RootState } from 'library'
import { Sidebar } from 'primereact/sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PAGE_LINKS } from 'utils'

const SidebarComponent = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()

  return (
    <Sidebar
      visible={isOpen}
      onHide={() => dispatch(deactivateSidebar())}
      className="dark:bg-black">
      <h3 className="prose text-4xl h-12 font-bold text-transparent cursor-default bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
        Where to go ?
      </h3>

      <ul
        className="text-2xl my-4 flex flex-col items-start prose prose-li:pl-0 prose-li:font-semibold prose-li:inline dark:text-white"
        data-testid="sidebar">
        {PAGE_LINKS.map((link, index) => (
          <li key={index} onClick={() => dispatch(deactivateSidebar())}>
            <Link
              to={link.path}
              className="text-2xl hover:text-blue-500 cursor-pointer transition-colors text-white font-bold no-underline ">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </Sidebar>
  )
}

export default SidebarComponent
