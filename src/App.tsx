import React from 'react';
import { SpinWheel } from './components/SpinWheel';
import { SpinButton } from './components/SpinButton';
import { ResultWidget } from './components/ResultWidget';
import { Header } from './components/Header';
import { ExerciseDialog } from './components/ExerciseDialog';
import { useSpinner } from './hooks/useSpinner';
import { useExercises } from './hooks/useExercises';
import { Settings, Dumbbell } from 'lucide-react';

export default function App() {
  const {
    selectedExercises,
    allExercises,
    isDialogOpen,
    setIsDialogOpen,
    toggleExercise,
    addNewExercise,
  } = useExercises();

  const { rotation, isSpinning, selectedExercise, handleSpin } = useSpinner(selectedExercises);

  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Backdrop Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Dumbbell className="w-[120vh] h-[120vh] text-white transform -rotate-12" />
      </div>
      
      <Header />
      
      <button
        onClick={() => setIsDialogOpen(true)}
        className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
      >
        <Settings className="w-6 h-6 text-gray-300" />
      </button>

      <ResultWidget selectedExercise={selectedExercise} isSpinning={isSpinning} />
      
      <div className="relative mb-8">
        <SpinWheel
          exercises={selectedExercises}
          rotation={rotation}
          isSpinning={isSpinning}
        />
      </div>

      <SpinButton
        onClick={handleSpin}
        disabled={isSpinning || selectedExercises.length < 2}
      />

      <ExerciseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        allExercises={allExercises}
        selectedExercises={selectedExercises}
        onToggleExercise={toggleExercise}
        onAddExercise={addNewExercise}
      />
    </div>
  );
}