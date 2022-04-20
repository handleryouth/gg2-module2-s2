import { useRef } from 'react';
import Button from 'components/button/Button';
import Input from 'components/input/CustomInput';
import { InputFormRef, ItemFormProps } from 'types';

function ItemForm({ toggleSubmit, toggleCancel }: ItemFormProps) {
  const inputForm = useRef<InputFormRef>({
    uris: '',
    position: ''
  });
  return (
    <div className="relative z-20" data-testid="item-form">
      <div className="fixed w-screen h-screen bg-black/50  top-0" />
      <div className="fixed w-full flex top-[35%] justify-center items-center ">
        <form
          onSubmit={(e) => toggleSubmit(e, inputForm.current)}
          className="max-w-none bg-blue-900 p-4 rounded prose flex flex-col gap-y-4 items-center">
          <Input
            data-testid="custom-input"
            label="Song link"
            placeholder="Fill with song link"
            toggleChange={(e) => (inputForm.current.uris = e.target.value)}
          />

          <Input
            label="Position"
            data-testid="custom-input"
            placeholder="Song position in playlist"
            toggleChange={(e) => (inputForm.current.position = e.target.value)}
          />
          <Button type="submit">Add Item to Playlist</Button>
          <Button type="button" toggleFunction={toggleCancel}>
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
