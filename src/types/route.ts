export interface RoutesProps {
  path: string
  component: () => JSX.Element
  exact?: boolean
}
