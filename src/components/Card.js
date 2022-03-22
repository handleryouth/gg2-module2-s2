function Card({ image, title, artist }) {
  return (
    <div className=" border-4 border-black rounded p-4">
      <img className="mt-0 h-56" src={image} alt={title} />
      <div className="w-56 prose-p:my-2 ">
        <p>Title:</p>
        <p>{title}</p>
        <p>Artist:</p>
        <p>{artist}</p>
      </div>

      <button className="rounded hover:bg-black hover:text-white text-center h-10 transition-colors bg-transparent w-full border-2 border-black text-black duration-200">
        Select
      </button>
    </div>
  );
}

export default Card;
