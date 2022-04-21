import { useState } from 'react';
import Button from 'components/button/Button';
import { Dialog } from 'primereact/dialog';
import { SongListProps } from 'types';

function SongList({ selectedSongs, setSelected }: SongListProps) {
  const [hide, setHide] = useState(false);

  return hide ? (
    <Dialog
      draggable={false}
      onHide={() => setHide(false)}
      visible
      position="bottom-right"
      header={<h3>Song list</h3>}
      footer={
        selectedSongs.length > 1 && (
          <Button toggleFunction={() => setSelected([])}>Remove all songs</Button>
        )
      }>
      <div
        data-testid="song-list"
        className="flex flex-col gap-5 max-h-52 overflow-y-auto prose-p:my-0  sm:w-80 ">
        {selectedSongs.length ? (
          selectedSongs.map((song, index) => (
            <div key={index} className="flex items-center justify-between text-white ">
              <p className="w-44 overflow-hidden">
                {song.name.length > 13 ? `${song.name.slice(0, 13)}...` : song.name}
              </p>
              <Button
                toggleFunction={() =>
                  setSelected((prevState) => prevState.filter((item) => item.id !== song.id))
                }>
                remove
              </Button>
            </div>
          ))
        ) : (
          <p className="text-white">No songs selected</p>
        )}
      </div>
    </Dialog>
  ) : (
    <div className="bg-black z-10  fixed bottom-20 right-3 rounded p-2 flex justify-end flex-col prose">
      <Button toggleFunction={() => setHide(true)}>Open list</Button>
    </div>
  );
}

export default SongList;
