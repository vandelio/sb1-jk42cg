import { Exercise } from '../data/exercises';

export const getRandomSpinDuration = (): number => {
  return Math.random() * 2 + 2; // Random duration between 2-4 seconds
};

export const getRandomRotation = (): number => {
  return Math.floor(Math.random() * 360) + 1440; // At least 4 full rotations
};

export const getSelectedExercise = (rotation: number, exercises: Exercise[]): Exercise => {
  if (exercises.length === 0) return null;
  
  const sliceAngle = 360 / exercises.length;
  // Normalize rotation and invert it since we want the top position (270 degrees) to be the selection point
  const normalizedRotation = (360 - (rotation % 360) + 270) % 360;
  const selectedIndex = Math.floor(normalizedRotation / sliceAngle) % exercises.length;
  return exercises[selectedIndex];
};