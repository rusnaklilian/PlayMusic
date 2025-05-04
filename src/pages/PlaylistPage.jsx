import { useParams } from "react-router-dom";
import { playlists } from "../data/songsData";
import Player from "../components/Player";
import { useState } from "react";

export default function PlaylistPage() {
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id.toString() === id);
  const [currentSong, setCurrentSong] = useState(null);

  if (!playlist) return <p>Плейлист не найден</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{playlist.name}</h2>
      <img src={playlist.image} alt={playlist.name} className="cover" style={{ width: 300 }} />
      <ul>
        {playlist.songs.map((song) => (
          <li key={song.id}>
            <button onClick={() => setCurrentSong(song)}>{song.name}</button>
          </li>
        ))}
      </ul>
      <Player currentSong={currentSong} />
    </div>
  );
}
