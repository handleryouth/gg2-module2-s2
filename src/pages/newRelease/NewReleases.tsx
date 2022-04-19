import { useCallback, useEffect, useState } from 'react'
import { Card, Pagination } from 'components'
import { AlbumsResponseData } from 'types'
import { requestHelper } from 'utils'

const NewReleases = () => {
  const [albums, setAlbums] = useState<AlbumsResponseData>({
    items: [],
    total: 0,
    limit: 0,
    offset: 0
  })

  const [page, setPage] = useState<number>(0)

  const handleGetData = useCallback(async () => {
    await requestHelper
      .get('/browse/new-releases', {
        params: {
          limit: 10,
          offset: page
        }
      })
      .then((res) => {
        setAlbums(res.data.albums)
      })
  }, [page])

  useEffect(() => {
    handleGetData()
  }, [handleGetData])

  return (
    <div>
      <h2 className="text-white text-center ">New Release Albums and Singles</h2>

      <div className="min-h-screen">
        <div className="flex flex-wrap gap-2 justify-center ">
          {albums.items.map((album) => (
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
          {albums.total > 10 && (
            <Pagination
              page={page}
              handlePageChange={(e) => {
                setPage(e.first)
              }}
              resultsLength={albums.total}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default NewReleases
