import React from 'react';

const CreatePostPlaceholder = () => (
    <div className="bg-zinc-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-600 rounded-full flex-shrink-0"></div>
            <div className="flex-grow bg-zinc-700 rounded-full h-10 cursor-pointer hover:bg-zinc-600 transition-colors"></div>
        </div>
        <hr className="border-zinc-700 my-4" />
        <div className="flex justify-around">
            <div className="w-1/3 h-8 bg-zinc-700 rounded-md"></div>
            <div className="w-1/3 h-8 bg-zinc-700 rounded-md mx-2"></div>
            <div className="w-1/3 h-8 bg-zinc-700 rounded-md"></div>
        </div>
    </div>
);

const PostPlaceholder = () => (
    <div className="bg-zinc-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-zinc-600 rounded-full"></div>
            <div className="flex-grow h-4 bg-zinc-700 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
            <div className="w-full h-4 bg-zinc-700 rounded"></div>
            <div className="w-3/4 h-4 bg-zinc-700 rounded"></div>
        </div>
        <div className="w-full h-48 bg-zinc-700 rounded-lg"></div>
    </div>
);


export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
            <CreatePostPlaceholder />
            {/* Feed Container */}
            <PostPlaceholder />
            <PostPlaceholder />
        </div>
    </div>
  );
}