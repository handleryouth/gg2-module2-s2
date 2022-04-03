import { useState, useEffect, useCallback, useRef, createContext } from "react";
import { Button, Card, PlaylistForm, Navbar, PlaylistList } from "components";
import { SPOTIFY_URL, requestHelper } from "util";

export const tokenContext = createContext();

const App = () => {
  const [tokenValue, setTokenValue] = useState("");
  const inputRef = useRef();
  const [createdPlaylist, setCreatedPlaylist] = useState([]);
  const userData = useRef();
  const [responseData, setResponseData] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSearch = useCallback(async () => {
    await requestHelper
      .get(`/search`, {
        params: {
          q: inputRef.current.value.replaceAll(" ", "+"),
          type: "track",
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      })
      .then((res) => setResponseData(res.data.tracks.items));
  }, [tokenValue]);

  const handleOnSubmitSuccess = useCallback((res, dispatch, formRef) => {
    formRef.reset();
    setCreatedPlaylist((prevState) => [...prevState, res.data]);

    dispatch("success");
    setTimeout(() => {
      dispatch("");
    }, 3000);
  }, []);

  const handleCreatePlayList = useCallback(
    async (event, value, dispatchState, formRef) => {
      event.preventDefault();

      await requestHelper
        .post(
          `/users/${userData.current && userData.current.id}/playlists`,
          {
            name: value.name,
            description: value.description,
            public: false,
            collaborative: false,
          },
          {
            headers: {
              Authorization: `Bearer ${tokenValue}`,
            },
          }
        )
        .then((res) =>
          res.status === 201
            ? handleOnSubmitSuccess(res, dispatchState, formRef)
            : dispatchState("failed")
        );
    },
    [handleOnSubmitSuccess, tokenValue]
  );

  const handleGetUserProfile = useCallback(async (value) => {
    await requestHelper
      .get("/me", {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => (userData.current = res.data));
  }, []);

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      handleGetUserProfile(token).then(() => setTokenValue(token));
    }
  }, [handleGetUserProfile]);

  if (!tokenValue) {
    return (
      <div className="text-center py-2">
        <a
          className="no-underline bg-black rounded text-white py-2 px-4"
          href={SPOTIFY_URL}
        >
          Login
        </a>
      </div>
    );
  }
  return (
    <tokenContext.Provider value={tokenValue}>
      <Navbar
        display_name={userData.current && userData.current.display_name}
        followers={userData.current && userData.current.followers.total}
      />
      <div>
        <div>
          <div className="text-center py-4">
            <input
              className="border-2 border-r-0 px-2 focus:outline-none"
              placeholder="search..."
              ref={inputRef}
            />
            <Button
              title="Search"
              toggleFunction={handleSearch}
              className="rounded-l-none"
            />
          </div>

          <div>
            <h3 className="text-center text-white">Song Detail</h3>

            <div className="flex items-center flex-wrap gap-4 justify-center">
              {responseData.map((item) => {
                return (
                  <Card
                    toggleSelected={() =>
                      setSelected((prevState) => [...prevState, item.id])
                    }
                    selectCondition={selected.includes(item.id)}
                    toggleDeselected={() =>
                      setSelected(selected.filter((id) => id !== item.id))
                    }
                    key={item.id}
                    artist={item.artists}
                    date={item.album.release_date}
                    image={item.album.images[0].url}
                    title={item.name}
                    totalTracks={item.track_number}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-center text-white">
              Get Playlist / Create Playlist
            </h3>

            <PlaylistForm toggleSubmit={handleCreatePlayList} />
          </div>

          <div>
            <h3 className="text-center text-white">Edit Playlist</h3>

            <div className="flex flex-col gap-y-4 items-center pb-4">
              {createdPlaylist.map((item, index) => (
                <PlaylistList
                  key={index}
                  id={item.id}
                  selectedSong={selected}
                  playlistName={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </tokenContext.Provider>
  );
};

export default App;
