import { ReactNode, useEffect } from 'react'
import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import SidebarComponent from 'components/sidebar/Sidebar'
import { ScrollTop } from 'primereact/scrolltop'
import { useLocation } from 'react-router-dom'

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <SidebarComponent />
      <ScrollTop threshold={250} />
      <div
        data-testid="layout"
        className="prose !min-w-[320px] !max-w-none bg-[#1c1b22] min-h-screen prose-ul:list-none prose-a:no-underline">
        <Navbar />
        <div className="max-w-[68rem] mx-auto px-4 lg:px-0">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout