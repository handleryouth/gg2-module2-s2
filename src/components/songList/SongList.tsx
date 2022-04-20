import { useState } from 'react';
import Button from 'components/button/Button';
import { SongListProps } from 'types';

function SongList({ selectedSongs, setSelected }: SongListProps) {
  const [showMusic, setShowMusic] = useState(true);
  const [hide, setHide] = useState(false);

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
                    toggleFunction={() =>
                      setSelected((prevState) => prevState.filter((item) => item.id !== song.id))
                    }>
                    remove
                  </Button>
                </div>
              ))}
            </div>
          )}

          <h3 className="text-white">Songs</h3>
          <div className="flex items-center justify-between flex-col  gap-2 sm:flex-row">
            <Button toggleFunction={() => setShowMusic((prevState) => !prevState)}>
              Show songs
            </Button>
            <Button toggleFunction={() => setHide(false)}>Close list</Button>
            {selectedSongs.length > 1 && (
              <Button toggleFunction={() => setSelected([])}>Remove all songs</Button>
            )}
          </div>
        </>
      ) : (
        <Button toggleFunction={() => setHide(true)}>Open list</Button>
      )}
    </div>
  );
}

export default SongList;
