import Player from "./Player"; // плеер с управлением

export default function Modal({ playlist, onClose, onPrev, onNext, currentSong }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="playlist-header">
          <img src={playlist.image} alt={playlist.name} className="playlist-cover" />
          <h2>{playlist.name}</h2>
        </div>

        <ul>
          {playlist.songs.map((song) => (
            <li key={song.id}>{song.name}</li>
          ))}
        </ul>

        <Player currentSong={currentSong} onPrev={onPrev} onNext={onNext} />
      </div>
    </div>
  );
}
