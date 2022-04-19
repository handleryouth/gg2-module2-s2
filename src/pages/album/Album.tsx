import { useEffect, useState, useCallback } from 'react'
import { Card, Input, Pagination } from 'components'
import { AlbumsResponseData } from 'types'
import { requestHelper, useDebounce } from 'utils'

const Albums = () => {
  const [search, setSearch] = useState('')
  const [responseData, setResponseData] = useState<AlbumsResponseData>({
    items: [],
    total: 0,
    limit: 0,
    offset: 0
  })

  const [page, setPage] = useState(0)
  const debounce = useDebounce()

  const handleLoadData = useCallback(async () => {
    await requestHelper
      .get('/search', {
        params: {
          q: search ? search.replaceAll(' ', '+') : 'taylorswift',
          type: 'album',
          limit: 10,
          offset: page
        }
      })
      .then((res) => setResponseData(res.data.albums))
  }, [page, search])

  useEffect(() => {
    handleLoadData()
  }, [handleLoadData])

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="mt-0 text-white">Search Albums</h2>
        <Input
          placeholder="Search for album"
          toggleChange={(e) => debounce(() => setSearch(e.target.value))}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-8 min-h-screen">
        {responseData.items.map((album) => (
          <Card
            enabledDetails
            key={album.id}
            id={album.id}
            artist={album.artists}
            date={album.release_date}
            image={album.images[0].url}
            title={album.name}
            totalTracks={album.total_tracks}
          />
        ))}
      </div>
      <div className="flex justify-center  py-8">
        {responseData.total > 10 && (
          <Pagination
            page={page}
            handlePageChange={(e) => {
              setPage(e.first)
            }}
            resultsLength={responseData.total}
          />
        )}
      </div>
    </div>
  )
}

export default Albums
