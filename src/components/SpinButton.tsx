import React from 'react';
import { RotateCw } from 'lucide-react';

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const SpinButton: React.FC<SpinButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-8 py-4 text-xl font-bold
        bg-indigo-600 text-white rounded-full shadow-lg
        transform transition-all duration-200
        ${disabled 
          ? 'opacity-50 cursor-not-allowed bg-gray-700' 
          : 'hover:bg-indigo-700 hover:scale-105 active:scale-95'}
      `}
    >
      <RotateCw className={`w-6 h-6 ${disabled ? 'animate-spin' : ''}`} />
      {disabled ? 'Spinning...' : 'Spin!'}
    </button>
  );
};