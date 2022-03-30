import CardDetail from "./CardDetail";

function Card({ image, title, artist, date, totalTracks }) {
  return (
    <div className="border-4 border-gray-200 rounded p-4 w-72   ">
      <img className="mt-0 h-56 mx-auto" src={image} alt={title} />
      <div className=" prose-p:my-2 text-center text-white h-[20rem] overflow-auto">
        <CardDetail
          title="Title"
          value={title.length > 20 ? `${title.slice(0, 20)}...` : title}
        />
        <CardDetail
          title="Artist"
          value={
            <div>
              {artist.map((item, index) => {
                return <p key={index}>{item.name}</p>;
              })}
            </div>
          }
        />
        <CardDetail title="Release Date" value={date} />
        <CardDetail title="Total Tracks" value={totalTracks} />
      </div>

      <button className="rounded hover:bg-black mt-4 text-center h-10 transition-colors bg-transparent w-full border-2 border-white text-white duration-200">
        Select
      </button>
    </div>
  );
}

export default Card;
