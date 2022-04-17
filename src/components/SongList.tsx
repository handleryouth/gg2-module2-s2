import { useState } from 'react'
import { SongListProps } from 'types/component'
import Button from './Button'

function SongList({ selectedSongs, setSelected }: SongListProps) {
  const [showMusic, setShowMusic] = useState(true)
  const [hide, setHide] = useState(false)

  return (
    <div
      className="bg-black z-10   fixed bottom-3 right-3 rounded p-2 flex justify-end flex-col prose"
      data-testid="song-list">
      {hide ? (
        <>
          {showMusic && (
            <div className="flex flex-col gap-5 max-h-52 overflow-y-auto prose-p:my-0  sm:w-80 ">
              {selectedSongs.map((song, index) => (
                <div key={index} className="flex items-center justify-between text-white ">
                  <p> {song.name.length > 13 ? `${song.name.slice(0, 13)}...` : song.name}</p>
                  <Button
                    title="remove"
                    toggleFunction={() =>
                      setSelected((prevState) => prevState.filter((item) => item.id !== song.id))
                    }
                  />
                </div>
              ))}
            </div>
          )}

          <h3 className="text-white">Songs</h3>
          <div className="flex items-center justify-between flex-col  gap-2 sm:flex-row">
            <Button
              title="Show songs"
              toggleFunction={() => setShowMusic((prevState) => !prevState)}
            />
            <Button title="Close list" toggleFunction={() => setHide(false)} />
            {selectedSongs.length > 1 && (
              <Button title="Remove all songs" toggleFunction={() => setSelected([])} />
            )}
          </div>
        </>
      ) : (
        <Button title="Open list" toggleFunction={() => setHide(true)} />
      )}
    </div>
  )
}

export default SongList
