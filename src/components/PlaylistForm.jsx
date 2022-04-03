import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";

function PlaylistForm({
  toggleSubmit,
  name,
  description,
  customFormClassName,
}) {
  const [sucess, setSucess] = useState("");
  const playlistData = useRef({
    name: "",
    description: "",
  });

  return (
    <form
      onSubmit={(e) => toggleSubmit(e, playlistData.current, setSucess)}
      className={`flex flex-col items-center gap-y-4 border-2 py-4 ${customFormClassName}`}
    >
      <Input
        label="Playlist Name"
        minLength={10}
        placeholder={name ?? "Enter your playlist name"}
        toggleChange={(e) => (playlistData.current.name = e.target.value)}
      />

      <Input
        label="Description"
        placeholder={description ?? "Enter your playlist description"}
        toggleChange={(e) =>
          (playlistData.current.description = e.target.value)
        }
      />

      <Button title="Submit" type="submit" />
      {sucess && <p>Playlist {sucess}</p>}
    </form>
  );
}

export default PlaylistForm;
