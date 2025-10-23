import React from 'react';

const ReelsPlaceholder = () => (
    <div className="bg-zinc-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-zinc-600 rounded-full"></div>
            <div className="flex-grow h-4 bg-zinc-700 rounded"></div>
        </div>
        <div className="w-full h-96 bg-zinc-700 rounded-lg"></div>
    </div>
);


export default function ReelsPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
            <ReelsPlaceholder />
            <ReelsPlaceholder />
        </div>
    </div>
  );
}