import { useEffect, useState, useCallback } from 'react'
import { Card, Input, Pagination, Seo } from 'components'
import { motion } from 'framer-motion'
import { slideLeftEntrance, slideLeftEntranceStaggered } from 'library'
import { AlbumsResponseData } from 'types'
import { requestHelper, useDebounce } from 'utils'

const Albums = () => {
  const [search, setSearch] = useState('')
  let rendered = true
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
      .then((res) => rendered && setResponseData(res.data.albums))
  }, [page, rendered, search])

  useEffect(() => {
    handleLoadData()

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      rendered = false
    }
  }, [handleLoadData])

  return (
    <>
      <Seo title="Albums" description="Albums from Spotify" />
      <div className="flex justify-center flex-col items-center ">
        <h2 className="mt-0 text-white">Search Albums</h2>
        <Input
          placeholder="Search for album"
          toggleChange={(e) => debounce(() => setSearch(e.target.value))}
        />
      </div>

      {responseData.items.length ? (
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-8 min-h-screen"
          variants={slideLeftEntranceStaggered}
          initial="hidden"
          animate="visible">
          {responseData.items.map((album) => (
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
        {responseData.total > 10 && (
          <Pagination
            page={page}
            handlePageChange={(e) => {
              window.scroll({ top: 0, behavior: 'smooth' })
              setPage(e.first)
            }}
            resultsLength={Math.floor(responseData.total / 10)}
          />
        )}
      </div>
    </>
  )
}

export default Albums
