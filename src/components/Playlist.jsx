export default function Playlist({ playlist, onClick }) {
  return (
    <div onClick={() => onClick(playlist)} className="playlist-card">
      <img src={playlist.image} alt={playlist.name} className="cover" />
      <h3>{playlist.name}</h3>
    </div>
  );
}
