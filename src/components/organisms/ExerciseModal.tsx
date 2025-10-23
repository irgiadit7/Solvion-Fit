// src/components/organisms/ExerciseModal.tsx
import React from 'react';
import { MuscleChart } from '../molecules/MuscleChart';
import type { Exercise } from '@prisma/client';

type ExerciseModalProps = {
  exercise: Exercise | null;
  onClose: () => void;
};

export const ExerciseModal = ({ exercise, onClose }: ExerciseModalProps) => {
  if (!exercise) return null;

  // Logika untuk membagi persentase efek pada otot.
  // Anda bisa menyesuaikan ini jika punya data yang lebih spesifik.
  const muscleData = exercise.targetMuscles.map(muscle => ({
    name: muscle.replace(/_/g, ' '), // Ganti underscore dengan spasi
    percentage: 100 / exercise.targetMuscles.length,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-zinc-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white text-3xl leading-none">&times;</button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kolom Kiri: Media & Deskripsi */}
            <div className="space-y-4">
              {exercise.gifUrl ? (
                <img src={exercise.gifUrl} alt={`Animasi ${exercise.name}`} className="w-full rounded-lg border border-zinc-700" />
              ) : exercise.videoUrl ? (
                <video src={exercise.videoUrl} controls className="w-full rounded-lg"></video>
              ) : (
                <div className="w-full aspect-video bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  Media tidak tersedia
                </div>
              )}
              <div>
                <h3 className="font-semibold text-white mb-2">Deskripsi</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{exercise.description}</p>
              </div>
            </div>
            {/* Kolom Kanan: Statistik Otot */}
            <div className="space-y-4">
                <MuscleChart data={muscleData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};