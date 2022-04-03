function PlaylistDetail({ songTitle, artists }) {
  return (
    <div className="prose-p:my-0 text-center">
      <h3 className="text-white">{songTitle}</h3>
      <div>
        <p>by:</p>
        {artists.map((artist, index) => (
          <p key={index}>{artist.name}</p>
        ))}
      </div>
    </div>
  );
}

export default PlaylistDetail;
