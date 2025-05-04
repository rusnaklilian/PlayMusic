import { Link } from "react-router-dom";
import { playlists } from "../data/songsData";
import Playlist from "../components/Playlist";

export default function Home() {
  return (
    <div>
      <h1>Spotify Clone</h1>
      <div className="playlist-grid">
        {playlists.map(pl => (
          <Link key={pl.id} to={`/playlist/${pl.id}`} className="playlist-link">
            <Playlist playlist={pl} />
          </Link>
        ))}
      </div>
    </div>
  );
}
