import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Tooltip from './Tooltip'

describe('Tooltip rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(
      <Tooltip target="text" textslice="testing test" text="testing test" />
    )
    expect(getByTestId('tooltip')).toBeInTheDocument()
  })
})
