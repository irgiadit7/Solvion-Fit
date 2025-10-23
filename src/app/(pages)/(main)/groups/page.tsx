import React from 'react';

const GroupCardPlaceholder = () => (
    <div className="bg-zinc-800 rounded-lg p-4 shadow-md text-center">
        <div className="w-24 h-24 bg-zinc-700 rounded-full mx-auto mb-4"></div>
        <div className="w-3/4 h-6 bg-zinc-700 rounded mx-auto mb-2"></div>
        <div className="w-1/2 h-4 bg-zinc-700 rounded mx-auto"></div>
    </div>
);

export default function GroupsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Your Group</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <GroupCardPlaceholder />
        <GroupCardPlaceholder />
        <GroupCardPlaceholder />
      </div>
    </div>
  );
}