import React from "react";
import Player from "../Player";

export default function Modal({
  isOpen,
  onClose,
  title,
  content,
  playlist,
  currentSong,
  onPrev,
  onNext,
  onPlay,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {content}
        {playlist && (
          <ul>
            {playlist.songs.map((song) => (
              <li key={song.id}>
                <button onClick={() => onPlay(song)}>{song.name}</button>
              </li>
            ))}
          </ul>
        )}
        <Player currentSong={currentSong} onPrev={onPrev} onNext={onNext} />
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
