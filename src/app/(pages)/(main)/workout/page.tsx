// src/app/(pages)/(main)/workout/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import type { Category, WorkoutPlan, Exercise, WorkoutPlanExercise } from '@prisma/client';
import { ExerciseModal } from '@/components/organisms/ExerciseModal';

// --- Komponen Ikon (tidak ada perubahan) ---
const SearchIcon = () => (
    <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
    </svg>
);
const TrophyIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11.25 2.25a.75.75 0 00-1.5 0v1.125A3.375 3.375 0 006.375 6.75H2.25a.75.75 0 000 1.5h4.125A3.375 3.375 0 009.75 11.625v1.625a3 3 0 101.5 0v-1.625A3.375 3.375 0 0014.625 8.25h4.125a.75.75 0 000-1.5h-4.125A3.375 3.375 0 0011.25 3.375V2.25zM10.5 5.25a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zM10.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);
const FireIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11.64 3.75a.75.75 0 00-1.28 0L8.35 6.22a.75.75 0 00.86.99l2.42-.32a.75.75 0 00.67-.84l-1-2.3zM10 9a.75.75 0 00-1.28 0L6.9 12.23a.75.75 0 00.86.99l3.5-.46a.75.75 0 00.67-.84L10 9zm0 4.5a.75.75 0 00-1.28 0l-1.82 3.23a.75.75 0 00.86.99l4.58-.61a.75.75 0 00.67-.84l-2.2-3.77z" />
    </svg>
);

// Tipe baru untuk data dari API
type WorkoutPlanWithDetails = WorkoutPlan & {
  category: Category;
  exercises: (WorkoutPlanExercise & {
    exercise: Exercise;
  })[];
};

export default function WorkoutPage() {
    const { data: session } = useSession();
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlanWithDetails[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

    const progress = 75;
    const circleCircumference = 2 * Math.PI * 52;
    const userName = session?.user?.name?.split(' ')[0] || 'User';

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                if (!response.ok) throw new Error('Failed to fetch workouts');
                const data = await response.json();
                setWorkoutPlans(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchWorkouts();
    }, []);

    // Fungsi untuk menampilkan modal exercise
    const handleExerciseClick = (exercise: Exercise) => {
      setSelectedExercise(exercise);
    };

    return (
        <>
            <ExerciseModal 
                exercise={selectedExercise} 
                onClose={() => setSelectedExercise(null)} 
            />

            <div className="max-w-7xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold text-white">Welcome back, {userName}!</h1>

                {/* Bagian lain dari halaman Anda tetap sama */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                  <div>
                      <h2 className="text-xl font-bold text-white flex items-center gap-2"><TrophyIcon />Featured Challenge</h2>
                      <p className="text-blue-100 mt-1">Complete 3 full-body workouts this week to earn a badge!</p>
                  </div>
                  <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-zinc-200 transition">View</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 bg-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className="relative w-32 h-32 mb-4">
                            <svg className="w-full h-full" viewBox="0 0 120 120">
                                <circle className="text-zinc-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="52" cx="60" cy="60" />
                                <circle
                                    className="text-blue-500"
                                    strokeWidth="10"
                                    strokeDasharray={circleCircumference}
                                    strokeDashoffset={circleCircumference - (progress / 100) * circleCircumference}
                                    strokeLinecap="round" stroke="currentColor" fill="transparent" r="52" cx="60" cy="60" transform="rotate(-90 60 60)"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">{progress}%</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">Weekly Goal</h3>
                        <p className="text-zinc-400 text-sm">Keep up the great work!</p>
                    </div>

                    <div className="md:col-span-2 bg-zinc-800 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          <button className="flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition group"><FireIcon /><span className="mt-2 text-sm font-semibold text-zinc-300 group-hover:text-white">5-min Warmup</span></button>
                          <button className="flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition group"><FireIcon /><span className="mt-2 text-sm font-semibold text-zinc-300 group-hover:text-white">10-min Abs</span></button>
                          <button className="flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition group"><FireIcon /><span className="mt-2 text-sm font-semibold text-zinc-300 group-hover:text-white">15-min Stretch</span></button>
                        </div>
                    </div>
                </div>
                
                {/* Explore Workouts Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Explore Workout Plans</h2>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><SearchIcon /></div>
                        <input type="search" placeholder="Search for a workout plan..." className="w-full bg-zinc-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"/>
                    </div>

                    {isLoading ? (
                        <p className="text-zinc-400 text-center">Loading workout plans...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {workoutPlans.map((plan) => (
                                <div key={plan.id} className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                                    <div className="w-full h-48 bg-cover bg-center" style={{backgroundImage: `url(${plan.coverImageUrl || 'https://source.unsplash.com/random/400x300/?fitness,gym'})`}}></div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="inline-block bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full">{plan.category.name}</span>
                                            <span className="text-xs font-medium text-zinc-400">{plan.difficulty}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1">{plan.title}</h3>
                                        <p className="text-zinc-400 text-sm mb-4 flex-grow">{plan.description}</p>
                                        
                                        <h4 className="text-sm font-semibold text-zinc-300 mb-2">Exercises:</h4>
                                        <div className="space-y-2">
                                            {plan.exercises.map(({ exercise }) => (
                                                <button 
                                                    key={exercise.id} 
                                                    onClick={() => handleExerciseClick(exercise)}
                                                    className="w-full text-left p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition"
                                                >
                                                    <span className="text-white text-sm">{exercise.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}