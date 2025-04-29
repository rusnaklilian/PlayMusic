import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const navigate = useNavigate();

  const createPlaylist = () => {
    if (playlistName.trim() === '') return;
    setPlaylists([...playlists, { name: playlistName, songs: [] }]);
    setPlaylistName('');
  };

  const addSong = (e) => {
    const file = e.target.files[0];
    if (!file || selectedIndex === null) return;

    const audioUrl = URL.createObjectURL(file);
    const newPlaylists = [...playlists];
    newPlaylists[selectedIndex].songs.push({ name: file.name, url: audioUrl });
    setPlaylists(newPlaylists);
  };

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt='' />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 text-white pl-8'>
          <img className='w-6' src={assets.search_icon} alt='' />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[85%] rounded overflow-y-auto'>
        <div className='p-4'>
          <input
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className='w-full p-2 mb-2 rounded bg-[#333] text-white'
            placeholder='New playlist name'
          />
          <button onClick={createPlaylist} className='w-full bg-white text-black py-2 rounded'>Create Playlist</button>
        </div>

        <div className='p-4'>
          <h2 className='text-lg mb-2'>Playlists</h2>
          {playlists.map((playlist, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer p-2 rounded ${selectedIndex === index ? 'bg-[#333]' : 'hover:bg-[#222]'}`}
            >
              {playlist.name}
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className='p-4'>
            <h3 className='text-md mb-2'>Add song to: {playlists[selectedIndex].name}</h3>
            <input
              type='file'
              accept='audio/*'
              onChange={addSong}
              className='w-full mb-2 text-sm text-white bg-[#333] rounded p-1'
            />
            <ul className='mt-4 space-y-2'>
              {playlists[selectedIndex].songs.map((song, i) => (
                <li key={i} className='text-sm'>
                  <p><strong>{song.name}</strong></p>
                  <audio controls src={song.url} className='w-full mt-1' />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
