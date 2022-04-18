import { ReactNode } from 'react'
import Navbar from 'components/navbar/Navbar'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      data-testid="layout"
      className="prose !min-w-[320px] !max-w-none bg-[#1c1b22] min-h-screen prose-ul:list-none prose-a:no-underline">
      <Navbar />
      <div className="max-w-[68rem] mx-auto">{children}</div>
    </div>
  )
}

export default Layout
