import React, { useState, useCallback, useRef } from 'react'
import { requestHelper } from 'util'
import { Button, Card, PlaylistForm, PlaylistList, Portal, SongList } from 'components'
import { useSelector } from 'react-redux'

function Home() {
  const [responseData, setResponseData] = useState([])
  const [selected, setSelected] = useState([])
  const inputRef = useRef()
  const userData = useSelector((state) => state.user)
  const [createdPlaylist, setCreatedPlaylist] = useState([])

  const handleSearch = useCallback(async () => {
    await requestHelper
      .get(`/search`, {
        params: {
          q: inputRef.current.value.replaceAll(' ', '+'),
          type: 'track',
          limit: 10
        }
      })
      .then((res) => setResponseData(res.data.tracks.items))
  }, [])

  const handleOnSubmitSuccess = useCallback((res, dispatch, formRef) => {
    formRef.reset()
    setCreatedPlaylist((prevState) => [...prevState, res.data])

    dispatch('success')
    setTimeout(() => {
      dispatch('')
    }, 3000)
  }, [])

  const handleCreatePlayList = useCallback(
    async (event, value, dispatchState, formRef) => {
      event.preventDefault()

      await requestHelper
        .post(`/users/${userData.id}/playlists`, {
          name: value.name,
          description: value.description,
          public: false,
          collaborative: false
        })
        .then((res) =>
          res.status === 201
            ? handleOnSubmitSuccess(res, dispatchState, formRef)
            : dispatchState('failed')
        )
    },
    [handleOnSubmitSuccess, userData.id]
  )

  return (
    <>
      <Portal visible={selected.length > 0}>
        <SongList selectedSongs={selected} setSelected={setSelected} />
      </Portal>
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

          <div className="grid  gap-5 justify-items-center grid-cols-grid-auto-fit-songs xl:grid-cols-4 my-4">
            {responseData.length ? (
              responseData.map((item) => {
                return (
                  <Card
                    toggleSelected={() =>
                      setSelected((prevState) => [
                        ...prevState,
                        {
                          name: item.name,
                          id: item.id
                        }
                      ])
                    }
                    selectCondition={selected.map((item) => item.id).includes(item.id)}
                    toggleDeselected={() =>
                      setSelected(selected.filter((song) => song.id !== item.id))
                    }
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
