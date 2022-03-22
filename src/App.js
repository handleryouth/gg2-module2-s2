import { Card } from "./components";
import data from "./mock";

function App() {
  return (
    <div>
      <h1 className="text-center mt-4">Gigih Assignment Module 2</h1>

      <div>
        <h3 className="text-center">Song Detail</h3>

        <div className="flex items-center flex-wrap gap-4 justify-center">
          {data.album.images.map((image, index) => (
            <Card
              key={index}
              image={image.url}
              artist={data.artists[0].name}
              title={data.album.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
