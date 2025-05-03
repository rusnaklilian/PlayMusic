import { useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaRedo, FaVolumeUp } from "react-icons/fa";

export default function PlayerBar({ currentSong, onPrev, onNext, onRepeat }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="player-bar">
      <audio id="audio" src={currentSong?.url} controls />
      <div className="controls">
        <button onClick={onRepeat}><FaRedo /></button>
        <button onClick={onPrev}><FaBackward /></button>
        <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        <button onClick={onNext}><FaForward /></button>
        <button><FaVolumeUp /></button>
      </div>
    </div>
  );
}
