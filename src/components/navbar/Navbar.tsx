import { RootState } from 'library'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const userData = useSelector((state: RootState) => state.user)

  const navbarLinks = [
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

  return (
    <nav
      className="z-10 sticky top-0 bg-[#1c1b22] border-b-2 w-full  px-4 text-white mb-8"
      data-testid="navbar">
      <div className="max-w-[68rem] flex items-center justify-between mx-auto">
        <div className="flex flex-col font-bold">
          <span>{userData.display_name || 'Unknown'}</span>
          <span>{userData.followers.total || 0} followers</span>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-2">
            {navbarLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} className="text-white hover:text-blue-500 transition-colors">
                    {item.text}{' '}
                  </Link>
                </li>
              )
            })}
          </ul>

          <img
            className="w-10 h-10 rounded-full"
            src={
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }
            alt="User Profile"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
