import { Card } from "./components";
import data from "./mock";

function App() {
  return (
    <div>
      <h1 className="text-center pt-4 text-white">
        Gigih Assignment Module 2 Session 2
      </h1>

      <div>
        <h3 className="text-center text-white">Song Detail</h3>

        <div className="flex items-center flex-wrap gap-4 justify-center">
          <Card
            image={data.album.images[0].url}
            artist={data.artists[0].name}
            title={data.album.name}
            date={data.album.release_date}
            totalTracks={data.album.total_tracks}
          />

          <Card
            image={data.album.images[1].url}
            artist={data.artists[0].name}
            title={data.album.name}
            date={data.album.release_date}
            totalTracks={data.album.total_tracks}
          />

          <Card
            image={data.album.images[2].url}
            artist={data.artists[0].name}
            title={data.album.name}
            date={data.album.release_date}
            totalTracks={data.album.total_tracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
