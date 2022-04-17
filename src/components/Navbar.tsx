import { RootState } from 'library'
import { useSelector } from 'react-redux'

function Navbar() {
  const userData = useSelector((state: RootState) => state.user)
  return (
    <nav
      className="z-10 sticky top-0 bg-[#1c1b22] border-b-2 w-full flex items-center justify-between px-4 text-white"
      data-testid="navbar">
      <div className="flex flex-col font-bold">
        <span>{userData.display_name || 'Unknown'}</span>
        <span>{userData.followers.total || 0} followers</span>
      </div>

      <img
        className="w-10 h-10 rounded-full"
        src={
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        }
        alt="User Profile"
      />
    </nav>
  )
}

export default Navbar
