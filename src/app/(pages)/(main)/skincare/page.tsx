import React from 'react';

const SkincareRoutinePlaceholder = () => (
    <div className="bg-zinc-800 rounded-lg p-4 shadow-md flex items-center gap-4">
        <div className="w-16 h-16 bg-zinc-700 rounded-full flex-shrink-0"></div>
        <div className="flex-grow space-y-2">
            <div className="w-3/4 h-5 bg-zinc-700 rounded"></div>
            <div className="w-1/2 h-4 bg-zinc-700 rounded"></div>
        </div>
    </div>
);

export default function SkincarePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skincare Routines</h1>
      <div className="space-y-4">
        <SkincareRoutinePlaceholder />
        <SkincareRoutinePlaceholder />
        <SkincareRoutinePlaceholder />
      </div>
    </div>
  );
}