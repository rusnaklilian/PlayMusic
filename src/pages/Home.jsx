import { useState } from "react";
import { playlists } from "../data/songsData";
import Playlist from "../components/Playlist";
import PlaylistModal from "../components/PlaylistModal";
import SongItem from "../components/SongItem";
import Player from "../components/Player";

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);
  const [openedPlaylist, setOpenedPlaylist] = useState(null);

  return (
    <div>
      <h1>Spotify Clone</h1>
      <div className="playlist-grid">
        {playlists.map(pl => (
          <Playlist key={pl.id} playlist={pl} onClick={setOpenedPlaylist} />
        ))}
      </div>

      {openedPlaylist && (
        <PlaylistModal
          playlist={openedPlaylist}
          onClose={() => setOpenedPlaylist(null)}
          onPlay={setCurrentSong}
        />
      )}

      <h3>🎶 Все песни:</h3>
      {playlists.flatMap(pl => pl.songs).map(song => (
        <SongItem key={song.id} song={song} onPlay={setCurrentSong} />
      ))}

      <Player currentSong={currentSong} />
    </div>
  );
}
