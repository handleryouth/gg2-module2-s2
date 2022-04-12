import { useState, useCallback } from 'react'
import { requestHelper } from 'util'
import { Button } from 'components'
import ItemForm from './ItemForm'
import PlaylistDetail from './PlaylistDetail'
import Portal from './Portal'

function PlaylistList({ playlistName, id, selectedSong }) {
  const [edit, setEdit] = useState(false)
  const [playlistItems, setPlaylistItems] = useState()
  const [showItems, setShowItems] = useState(true)
  const [errorText, setErrorText] = useState('')

  const handleLoadPlaylistDetail = useCallback(async () => {
    await requestHelper.get(`/playlists/${id}/tracks`).then((res) => {
      setPlaylistItems(res.data.items)
    })
  }, [id])

  const handleGenerateError = useCallback((text) => {
    setErrorText(text)

    setTimeout(() => {
      setErrorText('')
    }, 5000)
  }, [])

  const handleAddItem = useCallback(
    async (e, inputValue, dispatchMessage) => {
      e && e.preventDefault()

      const questionMark = inputValue && inputValue.uris.lastIndexOf('?')
      const exclamationMark = inputValue && inputValue.uris.lastIndexOf('/')
      const trackId =
        inputValue &&
        inputValue.uris
          .replace(inputValue.uris.substring(questionMark), '')
          .substring(exclamationMark + 1)

      await requestHelper
        .post(`/playlists/${id}/tracks`, {
          uris: inputValue
            ? [`spotify:track:${trackId}`]
            : selectedSong.map((item) => `spotify:track:${item}`),
          position: inputValue && inputValue.position - 1
        })
        .then(() => {
          handleLoadPlaylistDetail()
          setEdit(false)
        })
        .catch(() =>
          dispatchMessage
            ? dispatchMessage('Error. Try again')
            : handleGenerateError('Error. Try again')
        )
    },
    [handleGenerateError, handleLoadPlaylistDetail, id, selectedSong]
  )

  return (
    <div className="text-white border-2 min-w-[280px] w-4/5 max-w-[30rem]  rounded p-4">
      <div className="text-center">
        <p className="mt-0">Playlist Name: {playlistName}</p>
        <div className="flex items-center gap-x-2 justify-center">
          <Button
            title="Add song by link"
            toggleFunction={() => setEdit((prevState) => !prevState)}
          />
          <Button
            title="Add selected song"
            toggleFunction={() =>
              selectedSong.length === 0
                ? handleGenerateError('You have not selected a song yet.')
                : handleAddItem()
            }
          />
          <Button
            title={`${showItems ? 'Hide' : 'Show'} Items`}
            toggleFunction={() => setShowItems((prevState) => !prevState)}
          />
        </div>
        {errorText && <p className="text-white">{errorText}</p>}
      </div>
      {showItems &&
        playlistItems &&
        playlistItems.map((item, index) => (
          <PlaylistDetail key={index} songTitle={item.track.name} artists={item.track.artists} />
        ))}
      {
        <Portal visible={edit}>
          <ItemForm toggleSubmit={handleAddItem} toggleCancel={() => setEdit(false)} />
        </Portal>
      }
    </div>
  )
}

export default PlaylistList
