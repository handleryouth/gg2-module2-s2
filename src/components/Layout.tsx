import { LayoutProps } from 'types'

function Layout({ component }: LayoutProps) {
  return (
    <div
      data-testid="layout"
      className="prose !min-w-[320px] !max-w-none bg-[#1c1b22] min-h-screen ">
      {component}
    </div>
  )
}

export default Layout
