'use client';

import React from 'react';
import Image from 'next/image';
import {
  Heart,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from 'lucide-react';

// Contoh data, nantinya bisa diganti dengan data dinamis
const songData = {
  title: 'Nonstop',
  artist: 'Drake',
  thumbnailUrl: '/img/drake-nonstop.jpg', // Anda perlu menambahkan gambar ini
};

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-4 w-full max-w-sm shadow-lg">
      <div className="flex items-center gap-4">
        {/* Album Art */}
        <div className="w-20 h-20 flex-shrink-0">
          <Image
            src={songData.thumbnailUrl}
            alt={`Album art for ${songData.title}`}
            width={80}
            height={80}
            className="rounded-md"
          />
        </div>

        {/* Song Info & Controls */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-white text-lg">{songData.title}</h3>
              <p className="text-sm text-zinc-400">{songData.artist}</p>
            </div>
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          </div>

          {/* Progress Bar */}
          <div className="bg-zinc-600 rounded-full h-1.5 w-full">
            <div
              className="bg-green-400 h-1.5 rounded-full"
              style={{ width: '33%' }}
            />
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-between text-white">
            <SkipBack className="w-6 h-6" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-zinc-700 rounded-full p-2"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <SkipForward className="w-6 h-6" />
          </div>
        </div>
      </div>
      {/* "Up Next" Section (Placeholder) */}
      <div className="mt-4">
        <h4 className="font-semibold text-zinc-300 mb-2">Up Next</h4>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-zinc-700 rounded-md"></div>
          <div className="w-12 h-12 bg-zinc-700 rounded-md"></div>
          <div className="w-12 h-12 bg-zinc-700 rounded-md"></div>
          <div className="w-12 h-12 bg-zinc-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};