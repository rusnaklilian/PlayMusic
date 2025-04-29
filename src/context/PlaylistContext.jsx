// src/context/PlaylistContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(() => {
    const saved = localStorage.getItem("playlists");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const createPlaylist = (name) => {
    setPlaylists([...playlists, { name, songs: [] }]);
  };

  const addSongToPlaylist = (playlistName, song) => {
    setPlaylists(
      playlists.map((playlist) =>
        playlist.name === playlistName
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist
      )
    );
  };

  return (
    <PlaylistContext.Provider value={{ playlists, createPlaylist, addSongToPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
