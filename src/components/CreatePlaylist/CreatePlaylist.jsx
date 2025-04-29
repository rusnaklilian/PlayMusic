// src/pages/CreatePlaylist.jsx
import React, { useState, useContext } from 'react';
import { PlaylistContext } from '../context/PlaylistContext';

const CreatePlaylist = () => {
  const { createPlaylist, addSongToPlaylist, playlists } = useContext(PlaylistContext);
  const [playlistName, setPlaylistName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');

  const handleCreatePlaylist = () => {
    if (playlistName) {
      createPlaylist(playlistName);
      setPlaylistName('');
    }
  };

  const handleAddSong = () => {
    if (selectedFile && selectedPlaylist) {
      const song = {
        id: Date.now(),
        name: selectedFile.name,
        file: URL.createObjectURL(selectedFile),
      };
      addSongToPlaylist(selectedPlaylist, song);
      setSelectedFile(null);
    }
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl mb-4">Create Playlist</h2>

      <div className="mb-4">
        <input
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Playlist name"
          className="text-black px-4 py-2 mr-2"
        />
        <button onClick={handleCreatePlaylist} className="bg-green-500 px-4 py-2 rounded">
          Create
        </button>
      </div>

      <h3 className="text-xl mt-6 mb-2">Add Song to Playlist</h3>
      <input type="file" accept="audio/*" onChange={(e) => setSelectedFile(e.target.files[0])} className="mb-2" />
      <select value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)} className="text-black mb-2">
        <option value="">Select Playlist</option>
        {Object.keys(playlists).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={handleAddSong} className="bg-blue-500 px-4 py-2 rounded ml-2">
        Add Song
      </button>
    </div>
  );
};

export default CreatePlaylist;
