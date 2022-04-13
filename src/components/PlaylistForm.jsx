import { useRef } from 'react'
import Button from './Button'
import Input from './Input'

function PlaylistForm({ toggleSubmit, name, description, customFormClassName }) {
  const formRef = useRef()
  const playlistData = useRef({
    name: '',
    description: ''
  })

  return (
    <form
      ref={formRef}
      onSubmit={(e) => toggleSubmit(e, playlistData.current, formRef.current)}
      className={`flex flex-col items-center gap-y-4 border-2 py-4 ${customFormClassName}`}>
      <Input
        label="Playlist Name"
        minLength={10}
        required
        placeholder={name ?? 'Enter your playlist name'}
        toggleChange={(e) => (playlistData.current.name = e.target.value)}
      />

      <Input
        label="Description"
        placeholder={description ?? 'Enter your playlist description'}
        toggleChange={(e) => (playlistData.current.description = e.target.value)}
      />

      <Button title="Submit" type="submit" />
    </form>
  )
}

export default PlaylistForm
