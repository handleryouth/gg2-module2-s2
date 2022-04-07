import { useRef, useState } from 'react'
import Button from './Button'
import Input from './Input'

function ItemForm({ toggleSubmit, toggleCancel }) {
  const [error, setError] = useState('')
  const inputForm = useRef({
    uris: '',
    position: ''
  })
  return (
    <div className="relative z-20">
      <div className="fixed w-screen h-screen bg-black/50  top-0" />
      <div className="fixed w-full flex top-[35%] justify-center items-center ">
        <form
          onSubmit={(e) => toggleSubmit(e, inputForm.current, setError)}
          className="max-w-none bg-blue-900 p-4 rounded prose flex flex-col gap-y-4 items-center">
          <Input
            label="Song link"
            placeholder="Fill with song link"
            toggleChange={(e) => (inputForm.current.uris = e.target.value)}
          />

          <Input
            label="Position"
            placeholder="Song position in playlist"
            toggleChange={(e) => (inputForm.current.position = e.target.value)}
          />
          {error && <p className="my-0 text-white">{error}</p>}
          <Button title="Add Item to Playlist" type="submit" />
          <Button title="Cancel" type="button" toggleFunction={toggleCancel} />
        </form>
      </div>
    </div>
  )
}

export default ItemForm
