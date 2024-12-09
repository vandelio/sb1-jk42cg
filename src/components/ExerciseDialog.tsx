import React, { useState } from 'react';
import { Exercise } from '../data/exercises';
import { X, Plus, Check } from 'lucide-react';

interface ExerciseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  allExercises: Exercise[];
  selectedExercises: Exercise[];
  onToggleExercise: (exercise: Exercise) => void;
  onAddExercise: (name: string) => void;
}

export const ExerciseDialog: React.FC<ExerciseDialogProps> = ({
  isOpen,
  onClose,
  allExercises,
  selectedExercises,
  onToggleExercise,
  onAddExercise,
}) => {
  const [newExerciseName, setNewExerciseName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExerciseName.trim()) {
      onAddExercise(newExerciseName.trim());
      setNewExerciseName('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto border border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Manage Exercises</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newExerciseName}
              onChange={(e) => setNewExerciseName(e.target.value)}
              placeholder="Add new exercise"
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="space-y-2">
          {allExercises.map((exercise) => {
            const isSelected = selectedExercises.some(ex => ex.id === exercise.id);
            return (
              <div
                key={exercise.id}
                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: exercise.color }}
                  />
                  <span className="text-gray-200">{exercise.name}</span>
                </div>
                <button
                  onClick={() => onToggleExercise(exercise)}
                  className={`p-1 rounded-full ${
                    isSelected
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};