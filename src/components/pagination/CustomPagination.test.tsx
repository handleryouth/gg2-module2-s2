import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CustomPagination from './CustomPagination'

describe('Rendering custom pagination', () => {
  it('should render custom pagination', () => {
    const { getByTestId } = render(
      <CustomPagination handlePageChange={() => null} page={1} resultsLength={50} />
    )
    expect(getByTestId('custom-pagination')).toBeInTheDocument()
  })
})
