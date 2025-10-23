/*
  Warnings:

  - The primary key for the `WorkoutPlanExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WorkoutPlanExercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WorkoutPlanExercise" DROP CONSTRAINT "WorkoutPlanExercise_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "WorkoutPlanExercise_pkey" PRIMARY KEY ("workoutPlanId", "order");
