import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Import the shared prisma instance

export async function GET() {
  try {
    const workoutPlans = await prisma.workoutPlan.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(workoutPlans);
  } catch (error) {
    console.error("Failed to fetch workout plans:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}