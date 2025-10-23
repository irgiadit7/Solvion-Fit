'use client'; // Tambahkan ini di baris paling atas

import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Impor useState dan useEffect
import Image from 'next/image';


// --- Ikon-ikon untuk Navigasi ---

const HomeIcon = ({ active = false }: { active?: boolean }) => (
  <svg className={`w-7 h-7 ${active ? 'text-blue-500' : 'text-zinc-400'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  </svg>
);

const ReelsIcon = () => (
      <Image 
    src="/svg/Reels.webp"
    alt="Reels Icon" 
    width={32}
    height={32}
    />
);

const WorkoutIcon = () => (
    <Image 
    src="/svg/Workout.webp"
    alt="Workout Icon" 
    width={36}
    height={34}
    />
);

const SkincareIcon = () => (
    <Image
        src="/svg/SkincareIcon.webp"
        alt="Skincare Icon"
        width={24}
        height={24}
    />
);

const GroupsIcon = () => (
  <svg className="w-7 h-7 text-zinc-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const BellIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15h14a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>;
const UserCircleIcon = () => <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>;
const SearchIcon = () => <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>;


export const HomeHeader = () => {
    // State untuk mengontrol menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Efek untuk mencegah scrolling saat menu mobile terbuka
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-800 border-b border-zinc-700 shadow-md">
                <div className="relative flex items-center justify-between h-16 px-4 sm:px-6">
                    {/* Left side: Logo and Search */}
                    <div className="flex items-center gap-4">
                        <Link href="/home" className="text-2xl font-bold text-white cursor-pointer">
                            <span className="text-blue-500">SF</span>
                        </Link>
                        <div className="relative hidden sm:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Search SolvionFit"
                                className="bg-zinc-700 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                            />
                        </div>
                    </div>

                    {/* Center: Desktop Navigation Icons */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                        <div className="flex items-center space-x-2">
                            <Link href="/home" className="px-8 py-2 rounded-lg hover:bg-zinc-700 transition-colors border-b-4 border-blue-500">
                                <HomeIcon active />
                            </Link>
                            <Link href="reels" className="px-8 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
                                <ReelsIcon />
                            </Link>
                            <Link href="/workout" className="px-8 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
                                <WorkoutIcon />
                            </Link>
                            <Link href="/skincare" className="px-8 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
                                <SkincareIcon />
                            </Link>
                            <Link href="/groups" className="px-8 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
                                <GroupsIcon />
                            </Link>
                        </div>
                    </nav>

                    {/* Right side: User actions & Hamburger Menu */}
                    <div className="flex items-center gap-2">
                        {/* Ikon di layar besar */}
                        <div className="hidden md:flex items-center gap-2">
                            <button className="p-2 bg-zinc-700 rounded-full text-zinc-200 hover:bg-zinc-600">
                                <BellIcon />
                            </button>
                            <button>
                                <UserCircleIcon />
                            </button>
                        </div>

                        {/* Tombol Hamburger di layar kecil */}
                        <div className="md:hidden">
                            <button
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Buka menu"
                            className="p-2 rounded-md"
                            >
                            <svg
                                className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay Menu Mobile */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/95">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
                        <div className="text-2xl font-bold">
                            <span className="text-blue-500">SF</span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Tutup menu"
                            className="p-2 rounded-md"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        </div>
                        
                        {/* Link Navigasi Mobile */}
                        <nav className="flex-grow flex flex-col items-center justify-center gap-8 text-xl">
                            <Link href="/home" onClick={() => setIsMenuOpen(false)} className="flex gap-3 items-center text-blue-500"><HomeIcon active /> <span>Home</span></Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)} className="flex gap-3 items-center hover:text-blue-400"><ReelsIcon /> <span>Reels</span></Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)} className="flex gap-3 items-center hover:text-blue-400"><WorkoutIcon /> <span>Workout</span></Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)} className="flex gap-3 items-center hover:text-blue-400"><SkincareIcon /> <span>Skincare</span></Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)} className="flex gap-3 items-center hover:text-blue-400"><GroupsIcon /> <span>Groups</span></Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};