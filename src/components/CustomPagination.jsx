import { Paginator } from 'primereact/paginator'

function CustomPagination({ handlePageChange, page, resultsLength }) {
  return (
    <Paginator
      first={page}
      rows={10}
      totalRecords={resultsLength}
      onPageChange={handlePageChange}
      className="bg-transparent border-2 inline-block "
    />
  )
}

export default CustomPagination
