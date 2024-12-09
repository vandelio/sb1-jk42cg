export interface Exercise {
  id: number;
  name: string;
  color: string;
}

export const defaultExercises: Exercise[] = [
  { id: 1, name: 'Push-ups', color: '#FF6B6B' },
  { id: 2, name: 'Squats', color: '#4ECDC4' },
  { id: 3, name: 'Burpees', color: '#45B7D1' },
  { id: 4, name: 'Jumping Jacks', color: '#96CEB4' },
  { id: 5, name: 'Lunges', color: '#FFEEAD' },
  { id: 6, name: 'Mountain Climbers', color: '#D4A5A5' },
  { id: 7, name: 'Plank', color: '#9ED2C6' },
  { id: 8, name: 'High Knees', color: '#FFB6B9' },
];