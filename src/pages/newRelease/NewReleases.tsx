import { useCallback, useEffect, useState } from 'react'
import { Card, Pagination, Seo } from 'components'
import { motion } from 'framer-motion'
import { slideLeftEntrance, slideLeftEntranceStaggered } from 'library'
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
      <Seo title="New Releases" description="New Releases from Spotify" />
      <h2 className="text-white text-center ">New Release Albums and Singles</h2>

      {albums.items.length ? (
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          variants={slideLeftEntranceStaggered}
          animate="visible"
          initial="hidden">
          {albums.items.map((album) => (
            <motion.div key={album.id} variants={slideLeftEntrance}>
              <Card
                enabledDetails
                id={album.id}
                artist={album.artists}
                date={album.release_date}
                image={album.images[0].url}
                title={album.name}
                totalTracks={album.total_tracks}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-white text-center">Nothing to see here 😢</p>
      )}

      <div className="flex justify-center  py-8">
        {albums.total > 10 && (
          <Pagination
            page={page}
            handlePageChange={(e) => {
              setPage(e.first)
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
            resultsLength={albums.total}
          />
        )}
      </div>
    </div>
  )
}

export default NewReleases
