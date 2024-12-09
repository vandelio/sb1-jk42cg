import { useState } from 'react';
import { Exercise } from '../data/exercises';
import { getRandomRotation, getRandomSpinDuration, getSelectedExercise } from '../utils/spinner';

export const useSpinner = (exercises: Exercise[]) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const newRotation = rotation + getRandomRotation();
    const spinDuration = getRandomSpinDuration();

    document.documentElement.style.setProperty('--spin-time', `${spinDuration}s`);
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedExercise(getSelectedExercise(newRotation, exercises));
    }, spinDuration * 1000);
  };

  return {
    rotation,
    isSpinning,
    selectedExercise,
    handleSpin
  };
};