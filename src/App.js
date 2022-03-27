import { Card } from "./components";
import data from "./mock";

function App() {
  return (
    <div>
      <h1 className="text-center pt-4 text-white">Gigih Assignment</h1>

      <div>
        <h3 className="text-center text-white">Song Detail</h3>

        <div className="flex items-center flex-wrap gap-4 justify-center">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                artist={item.album.artists}
                date={item.album.release_date}
                image={item.album.images[0].url}
                title={item.album.name}
                totalTracks={item.album.total_tracks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
