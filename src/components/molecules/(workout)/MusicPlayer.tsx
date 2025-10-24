'use client';

import React, { useState, useEffect } from 'react';
import { Music, PlusCircle } from 'lucide-react'; // Ganti ikon

// Import tipe Song jika diperlukan (asumsi sudah digenerate Prisma)
// import type { Song } from '@prisma/client';

type MusicPlayerProps = {
  onAddSongClick: () => void; // Fungsi untuk membuka modal upload
  // songs: Song[]; // Nanti kita akan pass data lagu ke sini
};

// Hapus playlistData

export const MusicPlayer = ({ onAddSongClick }: MusicPlayerProps) => {
  // State sementara untuk simulasi belum ada lagu
  const [songsAvailable, setSongsAvailable] = useState(false);

  // --- NANTI: Logika fetch lagu dari DB ---
  // useEffect(() => {
  //   // Fetch lagu untuk user ini
  //   // setSongsAvailable(songs.length > 0);
  // }, [/* dependencies */]);
  // ---

  if (!songsAvailable) {
    return (
      // Container pesan "belum tersedia" yang bisa diklik
      <div
        className="bg-zinc-800 rounded-lg p-3 flex flex-col items-center justify-center gap-2 w-full h-full cursor-pointer hover:bg-zinc-700 transition-colors text-center"
        onClick={onAddSongClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onAddSongClick();
          }
        }}
        aria-label="Tambahkan lagu baru"
      >
        <Music className="w-8 h-8 text-zinc-500" />
        <p className="text-xs text-zinc-400">Lagu belum tersedia</p>
        <div className="flex items-center gap-1 text-blue-500 hover:text-blue-400">
           <PlusCircle className="w-4 h-4" />
           <span className="text-xs font-semibold">Tambahkan Lagu</span>
        </div>
      </div>
    );
  }

  // --- NANTI: Tampilan pemutar musik kustom akan ada di sini ---
  return (
    <div className="bg-zinc-800 rounded-lg p-3 flex items-center justify-center w-full h-full">
      <p className="text-sm text-zinc-400">Pemutar Musik Kustom (Belum dibuat)</p>
    </div>
  );
};