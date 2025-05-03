export default function SongItem({ song, onPlay }) {
  return (
    <div onClick={() => onPlay(song)}>
      🎵 {song.name}
    </div>
  );
}
