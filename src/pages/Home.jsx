import { useState, useCallback, useRef } from 'react'
import { requestHelper } from 'util'
import {
  Button,
  Card,
  Pagination,
  PlaylistForm,
  PlaylistList,
  Portal,
  SongList,
  Toast
} from 'components'
import { ScrollTop } from 'primereact/scrolltop'
import { useSelector } from 'react-redux'

function Home() {
  const [responseData, setResponseData] = useState([])
  const [selected, setSelected] = useState([])
  const inputRef = useRef()
  const toastRef = useRef()
  const page = useRef(0)
  const [, setForceUpdate] = useState(false)
  const userData = useSelector((state) => state.user)
  const [createdPlaylist, setCreatedPlaylist] = useState([])

  const handleToast = useCallback(({ severity, summary, detail }) => {
    toastRef.current.show({
      severity: severity ?? 'success',
      summary: summary ?? 'Success',
      detail: detail ?? 'Success'
    })
  }, [])

  const handleSearch = useCallback(async () => {
    await requestHelper
      .get(`/search`, {
        params: {
          q: inputRef.current.value.replaceAll(' ', '+'),
          type: 'track',
          limit: 50
        }
      })
      .then((res) => {
        page.current = 0
        setResponseData(res.data.tracks.items)
      })
  }, [])

  const handleOnSubmitSuccess = useCallback(
    (res, formRef) => {
      formRef.reset()

      handleToast({
        detail: 'Playlist created'
      })

      setCreatedPlaylist((prevState) => [...prevState, res.data])
    },
    [handleToast]
  )

  const handleCreatePlayList = useCallback(
    async (event, value, formRef) => {
      event.preventDefault()

      await requestHelper
        .post(`/users/${userData.id}/playlists`, {
          name: value.name,
          description: value.description,
          public: false,
          collaborative: false
        })
        .then((res) => handleOnSubmitSuccess(res, formRef))
        .catch(() =>
          handleToast({
            severity: 'error',
            summary: 'Playlist Error',
            detail: 'Something wrong. Please check again'
          })
        )
    },
    [handleOnSubmitSuccess, handleToast, userData.id]
  )

  return (
    <>
      <Portal visible={selected.length > 0}>
        <SongList selectedSongs={selected} setSelected={setSelected} />
      </Portal>
      <Toast customRef={toastRef} />
      <ScrollTop threshold={250} />
      <div>
        <div className="text-center py-4">
          <input
            className="border-2 border-r-0 px-2 focus:outline-none"
            placeholder="search..."
            ref={inputRef}
          />
          <Button title="Search" toggleFunction={handleSearch} className="rounded-l-none" />
        </div>

        <div>
          <h3 className="text-center text-white">Song Detail</h3>
          <div className="grid  justify-items-center grid-cols-grid-auto-fit-songs xl:grid-cols-4 my-4 mx-4">
            {responseData.length ? (
              responseData.slice(page.current, page.current + 10).map((item) => {
                return (
                  <Card
                    toggleSelected={() => {
                      handleToast({ summary: 'Item added', detail: item.name })
                      setSelected((prevState) => [
                        ...prevState,
                        {
                          name: item.name,
                          id: item.id
                        }
                      ])
                    }}
                    selectCondition={selected.map((item) => item.id).includes(item.id)}
                    toggleDeselected={() => {
                      handleToast({ severity: 'error', summary: 'Item removed', detail: item.name })
                      setSelected(selected.filter((song) => song.id !== item.id))
                    }}
                    key={item.id}
                    artist={item.artists}
                    date={item.album.release_date}
                    image={item.album.images[0].url}
                    title={item.name}
                    totalTracks={item.track_number}
                  />
                )
              })
            ) : (
              <p className="text-white col-span-4 text-center ">
                You haven&apos;t search something yet 😢
              </p>
            )}
          </div>
          <div className="flex justify-center my-8">
            {responseData.length > 10 && (
              <Pagination
                page={page.current}
                handlePageChange={(e) => {
                  page.current = e.first
                  setForceUpdate((prevState) => !prevState)
                }}
                resultsLength={responseData.length}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-center text-white">Get Playlist / Create Playlist</h3>

          <PlaylistForm toggleSubmit={handleCreatePlayList} />
        </div>

        <div>
          <h3 className="text-center text-white">Edit Playlist</h3>

          <div className="flex flex-col gap-y-4 items-center pb-4">
            {createdPlaylist.length ? (
              createdPlaylist.map((item, index) => (
                <PlaylistList
                  key={index}
                  id={item.id}
                  selectedSong={selected.map((item) => item.id)}
                  playlistName={item.name}
                />
              ))
            ) : (
              <p className="text-white">Your playlist will be shown here.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
