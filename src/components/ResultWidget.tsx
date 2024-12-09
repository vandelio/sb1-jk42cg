import React from 'react';
import { Trophy } from 'lucide-react';
import { Exercise } from '../data/exercises';

interface ResultWidgetProps {
  selectedExercise: Exercise | null;
  isSpinning: boolean;
}

export const ResultWidget: React.FC<ResultWidgetProps> = ({ selectedExercise, isSpinning }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 w-80 transform transition-all duration-300">
      <div className="flex items-start gap-4">
        <Trophy className="w-12 h-12 text-yellow-500 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-bold text-gray-200 mb-1">Your Exercise</h2>
          <div>
            {isSpinning ? (
              <p className="text-gray-400 animate-pulse">Selecting exercise...</p>
            ) : selectedExercise ? (
              <p className="text-3xl font-extrabold" style={{ color: selectedExercise.color }}>
                {selectedExercise.name}
              </p>
            ) : (
              <p className="text-gray-400">Spin the wheel to get started!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};