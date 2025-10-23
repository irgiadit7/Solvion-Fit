// src/components/molecules/MuscleChart.tsx
import React from 'react';

type MuscleData = {
  name: string;
  percentage: number;
};

type MuscleChartProps = {
  data: MuscleData[];
};

export const MuscleChart = ({ data }: MuscleChartProps) => {
  if (!data || data.length === 0) {
    return <p className="text-zinc-500">Tidak ada data target otot.</p>;
  }

  return (
    <div className="space-y-4 rounded-lg bg-zinc-800 p-4">
      <h4 className="font-bold text-white">Target Otot</h4>
      {data.map((muscle) => (
        <div key={muscle.name}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-zinc-300 capitalize">{muscle.name}</span>
            <span className="text-sm font-medium text-zinc-400">{muscle.percentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${muscle.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};