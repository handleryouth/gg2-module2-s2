import { useState, useEffect, useCallback, useRef } from "react";
import { Card } from "components";
import { SPOTIFY_URL, BASE_URL } from "util";

const App = () => {
  const [token, setToken] = useState("");
  const inputRef = useRef();
  const [responseData, setResponseData] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSearch = useCallback(async () => {
    await fetch(
      `${BASE_URL}/search?q=${inputRef.current.value.replaceAll(
        " ",
        "+"
      )}&type=album&limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setResponseData(res.albums.items));
  }, [token]);

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      setToken(token);
    }
  }, []);

  if (!token) {
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
    <div>
      <div className="text-center py-4">
        <input
          className="border-2 border-r-0 px-2 focus:outline-none"
          placeholder="search..."
          ref={inputRef}
        />
        <button
          className="border-2  px-2 rounded-r-md hover:bg-black hover:border-black hover:text-white transition-colors text-white"
          onClick={handleSearch}
        >
          Search
        </button>
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
                date={item.release_date}
                image={item.images[0].url}
                title={item.name}
                totalTracks={item.total_tracks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
