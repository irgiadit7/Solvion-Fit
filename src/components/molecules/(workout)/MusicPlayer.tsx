'use client';

import React from 'react';

export const MusicPlayer = () => {
  // URL playlist Spotify bisa diganti dengan playlist atau album lain
  const spotifyEmbedUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator&theme=0";

  return (
    <div className="w-full h-full">
      <iframe
        style={{ borderRadius: '14px' }}
        src={spotifyEmbedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  );
};