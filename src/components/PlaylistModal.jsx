import SongItem from "./SongItem";

export default function PlaylistModal({ playlist, onClose, onPlay }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{playlist.name}</h2>
        {playlist.songs.map(song => (
          <SongItem key={song.id} song={song} onPlay={onPlay} />
        ))}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
