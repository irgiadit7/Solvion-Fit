import React from 'react';

const WorkoutCardPlaceholder = ({ title }: { title: string }) => (
    <div className="bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-40 bg-zinc-700"></div>
        <div className="p-4">
            <div className="h-6 w-3/4 bg-zinc-700 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-zinc-700 rounded"></div>
        </div>
    </div>
);

export default function WorkoutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Workout Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkoutCardPlaceholder title="Full Body Workout" />
        <WorkoutCardPlaceholder title="Upper Body Strength" />
        <WorkoutCardPlaceholder title="Cardio & Core" />
      </div>
    </div>
  );
}