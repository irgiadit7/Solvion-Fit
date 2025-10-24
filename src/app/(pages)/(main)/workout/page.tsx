'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
// Hapus import MusicPlayerModal yang lama (embed)
// import { MusicPlayerModal } from '@/components/molecules/(workout)/MusicPlayerModal';
import { MusicPlayer } from '@/components/molecules/(workout)/MusicPlayer';
import { UploadSongModal } from '@/components/molecules/(workout)/UploadSongModal'; // <-- Import modal upload baru

const TrophyIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11.25 2.25a.75.75 0 00-1.5 0v1.125A3.375 3.375 0 006.375 6.75H2.25a.75.75 0 000 1.5h4.125A3.375 3.375 0 009.75 11.625v1.625a3 3 0 101.5 0v-1.625A3.375 3.375 0 0014.625 8.25h4.125a.75.75 0 000-1.5h-4.125A3.375 3.375 0 0011.25 3.375V2.25zM10.5 5.25a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zM10.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

export default function WorkoutPage() {
    const { data: session } = useSession();
    const userName = session?.user?.name?.split(' ')[0] || 'User';
    // Hapus state modal embed
    // const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
    // Tambah state untuk modal upload
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    // Hapus fungsi modal embed
    // const openMusicModal = () => setIsMusicModalOpen(true);
    // const closeMusicModal = () => setIsMusicModalOpen(false);
    // Tambah fungsi untuk modal upload
    const openUploadModal = () => setIsUploadModalOpen(true);
    const closeUploadModal = () => setIsUploadModalOpen(false);

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <h1 className="text-3xl font-bold text-white">Welcome back, {userName}!</h1>

            {/* Featured Challenge */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg border border-gray-600">
               {/* ... (konten challenge tetap sama) ... */}
                 <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <TrophyIcon />
                        Featured Challenge
                    </h2>
                    <p className="text-blue-100 mt-1">
                        Complete 3 full-body workouts this week to earn a badge!
                    </p>
                </div>
                <button className="mt-4 md:mt-0 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-zinc-200 transition">
                    View
                </button>
            </div>

            {/* Weekly Goal & Quick Start Grid */}
            <div className="grid grid-cols-4 gap-8 border border-gray-600 p-4 rounded-2xl relative bg-zinc-800/40">
                {/* ... (placeholder 01-04 tetap sama) ... */}
                 <div className="bg-zinc-700 rounded-lg p-4 text-center h-20 flex items-center justify-center">01</div>
                <div className="bg-zinc-700 rounded-lg p-4 text-center h-20 flex items-center justify-center">02</div>
                <div className="bg-zinc-700 rounded-lg p-4 text-center h-20 flex items-center justify-center">03</div>
                <div className="bg-zinc-700 rounded-lg p-4 text-center h-20 flex items-center justify-center">04</div>


                {/* Music Player Area */}
                <div className="[grid-column:1/span_1] [width:150%] h-20">
                     {/* Berikan fungsi openUploadModal ke MusicPlayer */}
                    <MusicPlayer onAddSongClick={openUploadModal} />
                </div>

                {/* ... (placeholder 06-09 tetap sama) ... */}
                <div className="[grid-column:2/span_3] ml-[14%] bg-zinc-700 rounded-lg p-4 text-center h-20 flex items-center justify-center">
                    06
                </div>
                 <div className="col-span-4 grid grid-cols-3 gap-8 mt-4">
                    <div className="bg-zinc-700 rounded-lg p-4 text-center">07</div>
                    <div className="bg-zinc-700 rounded-lg p-4 text-center">08</div>
                    <div className="bg-zinc-700 rounded-lg p-4 text-center">09</div>
                </div>
            </div>

            {/* Library and Blog Section */}
            <div className="max-w-full mx-auto space-y-8">
                 {/* ... (konten library & blog tetap sama) ... */}
                 <h1 className="text-3xl font-bold text-white text-center">Workout</h1>
                <div className="grid grid-cols-1 gap-8">
                    <Link href="/workout/library">
                        <div className="relative bg-zinc-800 rounded-2xl shadow-lg overflow-hidden h-64 group">
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                <h2 className="text-2xl font-bold text-white mb-2">Library</h2>
                                <p className="text-zinc-300">Akses semua rencana dan jenis latihan di sini.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/workout/blog">
                        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden h-64 flex flex-col items-center justify-center p-6 hover:bg-zinc-700 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-white mb-2">Blog</h2>
                            <p className="text-zinc-400 text-center">Baca artikel terbaru tentang kebugaran dan kesehatan.</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Hapus render modal embed */}
            {/* <MusicPlayerModal isOpen={isMusicModalOpen} onClose={closeMusicModal} /> */}
            {/* Render modal upload baru */}
            <UploadSongModal isOpen={isUploadModalOpen} onClose={closeUploadModal} />
        </div>
    );
}