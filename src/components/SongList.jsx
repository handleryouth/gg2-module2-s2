import React, { useState } from 'react'
import Button from './Button'

function SongList({ selectedSongs, setSelected }) {
  const [showMusic, setShowMusic] = useState(true)
  return (
    <div className="bg-black z-10 w-80 fixed bottom-3 right-3 rounded p-2 flex justify-end flex-col prose">
      {showMusic && (
        <div className="flex flex-col gap-5 max-h-52 overflow-y-auto prose-p:my-0">
          {selectedSongs.map((song, index) => (
            <div key={index} className="flex items-center justify-between text-white ">
              <p>{song.name}</p>
              <Button
                title="remove"
                toggleFunction={() =>
                  setSelected((prevState) =>
                    prevState.filter((item) => item.id === selectedSongs.id)
                  )
                }
              />
            </div>
          ))}
        </div>
      )}

      <h3 className="text-white">Songs you have choosed</h3>
      <div className="flex items-center justify-between">
        <Button title="Show songs" toggleFunction={() => setShowMusic((prevState) => !prevState)} />
        {selectedSongs.length > 1 && (
          <Button title="Remove all songs" toggleFunction={() => setSelected([])} />
        )}
      </div>
    </div>
  )
}

export default SongList
