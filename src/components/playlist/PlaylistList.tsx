import { useState, useCallback, useRef, FormEvent, SetStateAction } from 'react'
import Button from 'components/button/Button'
import ItemForm from 'components/itemForm/ItemForm'
import PlaylistDetail from 'components/playlist/PlaylistDetail'
import Portal from 'components/portal/Portal'
import CustomToast from 'components/toast/CustomToast'
import { Toast } from 'primereact/toast'
import { InputFormRef, PlaylistItems, PlaylistListProps } from 'types'
import { requestHelper } from 'utils'

function PlaylistList({ playlistName, id, selectedSong }: PlaylistListProps) {
  const [edit, setEdit] = useState(false)
  const toastRef = useRef<Toast>(null)
  const [playlistItems, setPlaylistItems] = useState<PlaylistItems[]>([])

  const [showItems, setShowItems] = useState(true)

  const handleLoadPlaylistDetail = useCallback(async () => {
    await requestHelper
      .get(`/playlists/${id}/tracks`)
      .then((res: { data: { items: SetStateAction<PlaylistItems[]> } }) => {
        setPlaylistItems(res.data.items)
      })
  }, [id])

  const handleAddItem = useCallback(
    async (e?: FormEvent<HTMLFormElement>, inputValue?: InputFormRef) => {
      e && e.preventDefault()

      const questionMark = inputValue && inputValue.uris.lastIndexOf('?')
      const exclamationMark = inputValue && inputValue.uris.lastIndexOf('/')
      const trackId =
        inputValue &&
        inputValue.uris
          .replace(inputValue.uris.substring(questionMark!), '')
          .substring(exclamationMark! + 1)

      await requestHelper
        .post(`/playlists/${id}/tracks`, {
          uris: inputValue
            ? [`spotify:track:${trackId}`]
            : selectedSong.map((item) => `spotify:track:${item}`),
          position: inputValue && parseInt(inputValue!.position) - 1
        })
        .then(() => {
          toastRef.current!.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Track added'
          })
          handleLoadPlaylistDetail()
          setEdit(false)
        })
        .catch(() =>
          toastRef.current!.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Something wrong'
          })
        )
    },
    [handleLoadPlaylistDetail, id, selectedSong]
  )

  return (
    <>
      <CustomToast customRef={toastRef} />
      <div
        className="text-white border-2 min-w-[280px] w-4/5 max-w-[30rem]  rounded p-4"
        data-testid="playlist-list">
        <div className="text-center">
          <p className="mt-0">Playlist Name: {playlistName}</p>
          <div className="flex items-center gap-2 justify-center flex-col sm:flex-row">
            <Button toggleFunction={() => setEdit((prevState) => !prevState)}>
              Add song by link
            </Button>
            <Button
              toggleFunction={() =>
                selectedSong.length === 0
                  ? toastRef.current!.show({
                      severity: 'error',
                      summary: 'Error',
                      detail: 'Please select song'
                    })
                  : handleAddItem()
              }>
              Add selected song
            </Button>
            <Button toggleFunction={() => setShowItems((prevState) => !prevState)}>
              {`${showItems ? 'Hide' : 'Show'} Items`}
            </Button>
          </div>
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
    </>
  )
}

export default PlaylistList
