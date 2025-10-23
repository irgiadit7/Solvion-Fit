// src/app/api/workouts/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const workoutPlans = await prisma.workoutPlan.findMany({
      include: {
        category: true,
        // Tambahkan ini untuk mengambil data latihan yang berhubungan
        exercises: {
          include: {
            exercise: true, // Ambil juga detail dari setiap exercise
          },
          orderBy: {
            order: 'asc', // Urutkan latihan berdasarkan urutannya
          },
        },
      },
    });
    return NextResponse.json(workoutPlans);
  } catch (error) {
    console.error("Failed to fetch workout plans:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}