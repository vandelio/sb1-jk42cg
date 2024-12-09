import { useState, useEffect } from 'react';
import { Exercise, defaultExercises } from '../data/exercises';

const STORAGE_KEY = 'wheelExercises';
const ALL_EXERCISES_KEY = 'allExercises';

export const useExercises = () => {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedExercises = localStorage.getItem(STORAGE_KEY);
    const storedAllExercises = localStorage.getItem(ALL_EXERCISES_KEY);
    
    if (storedExercises) {
      setSelectedExercises(JSON.parse(storedExercises));
    }
    
    if (storedAllExercises) {
      setAllExercises(JSON.parse(storedAllExercises));
    } else {
      setAllExercises(defaultExercises);
      localStorage.setItem(ALL_EXERCISES_KEY, JSON.stringify(defaultExercises));
    }
  }, []);

  const toggleExercise = (exercise: Exercise) => {
    const isSelected = selectedExercises.some(ex => ex.id === exercise.id);
    let newSelected;
    
    if (isSelected) {
      newSelected = selectedExercises.filter(ex => ex.id !== exercise.id);
    } else {
      newSelected = [...selectedExercises, exercise];
    }
    
    setSelectedExercises(newSelected);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSelected));
  };

  const addNewExercise = (name: string) => {
    const newExercise: Exercise = {
      id: Date.now(),
      name,
      color: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
    };
    
    const updatedExercises = [...allExercises, newExercise];
    setAllExercises(updatedExercises);
    localStorage.setItem(ALL_EXERCISES_KEY, JSON.stringify(updatedExercises));
  };

  return {
    selectedExercises,
    allExercises,
    isDialogOpen,
    setIsDialogOpen,
    toggleExercise,
    addNewExercise,
  };
};