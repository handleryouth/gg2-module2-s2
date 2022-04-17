import { Paginator } from 'primereact/paginator'
import { PaginationProps } from 'types'

function CustomPagination({ handlePageChange, page, resultsLength }: PaginationProps) {
  return (
    <Paginator
      first={page}
      rows={10}
      totalRecords={resultsLength}
      data-testid="custom-pagination"
      onPageChange={handlePageChange}
      className="bg-transparent border-2 inline-block "
    />
  )
}

export default CustomPagination
