import { useRef } from "react";
import {
  FaVolumeUp,
  FaVolumeDown,
  FaPause,
  FaRedo,
  FaFastForward,
  FaFastBackward,
  FaStepForward,
  FaStepBackward
} from "react-icons/fa";

export default function Player({ currentSong, onPrev, onNext }) {
  const audioRef = useRef(null);

  const toggleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
    }
  };

  return (
    <div className="player-bar">
      {currentSong ? (
        <>
          <p>{currentSong.name}</p>
          <audio ref={audioRef} src={currentSong.url} controls />
          <div className="controls">
            <button onClick={onPrev} title="Предыдущий трек">
              <FaStepBackward />
            </button>
            <button onClick={() => (audioRef.current.playbackRate -= 0.25)} title="Скорость -">
              <FaFastBackward />
            </button>
            <button onClick={() => (audioRef.current.playbackRate += 0.25)} title="Скорость +">
              <FaFastForward />
            </button>
            <button onClick={() => (audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1))} title="Громкость -">
              <FaVolumeDown />
            </button>
            <button onClick={() => (audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.1))} title="Громкость +">
              <FaVolumeUp />
            </button>
            <button onClick={() => audioRef.current.pause()} title="Стоп">
              <FaPause />
            </button>
            <button onClick={toggleRepeat} title="Повтор">
              <FaRedo />
            </button>
            <button onClick={onNext} title="Следующий трек">
              <FaStepForward />
            </button>
          </div>
        </>
      ) : (
        <p>Выберите песню</p>
      )}
    </div>
  );
}
