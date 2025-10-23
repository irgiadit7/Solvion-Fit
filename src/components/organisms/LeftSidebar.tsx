'use client';

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';

// Placeholder icons
const PlaceholderIcon = () => <div className="w-6 h-6 bg-zinc-600 rounded"></div>;
const UserIcon = () => <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>;


export const LeftSidebar = () => {
    const { data: session } = useSession();

    return (
        <aside className="hidden lg:block w-80 flex-shrink-0 px-4 py-6">
            <div className="space-y-4">
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <UserIcon />
                    {/* Tampilkan nama user dari session, atau "Guest" jika tidak login */}
                    <span className="font-semibold text-white">{session?.user?.name || 'Guest User'}</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">Dashboard</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">My Workouts</span>
                </Link>
                 <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">Challenges</span>
                </Link>
                 <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">Friends</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">Memories</span>
                </Link>
                 <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700">
                    <PlaceholderIcon />
                    <span className="text-zinc-300">Saved</span>
                </Link>
            </div>
        </aside>
    );
};