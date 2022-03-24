import CardDetail from "./CardDetail";

function Card({ image, title, artist, date, totalTracks }) {
  return (
    <div className=" border-4 border-gray-200 rounded p-4 ">
      <img className="mt-0 h-56" src={image} alt={title} />
      <div className="w-56 prose-p:my-2 text-center text-white">
        <CardDetail title="Title" value={title} />
        <CardDetail title="Artist" value={artist} />
        <CardDetail title="Release Date" value={date} />
        <CardDetail title="Total Tracks" value={totalTracks} />
      </div>

      <button className="rounded hover:bg-black  text-center h-10 transition-colors bg-transparent w-full border-2 border-white text-white duration-200">
        Select
      </button>
    </div>
  );
}

export default Card;
