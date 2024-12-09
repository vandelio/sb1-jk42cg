import React from 'react';
import { Dumbbell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8 relative z-10">
      <h1 className="text-5xl font-extrabold text-white flex items-center justify-center gap-3 mb-2">
        <Dumbbell className="w-10 h-10" />
        Exercise Spinner
      </h1>
      <p className="text-gray-400 text-lg">Spin the wheel to get your random exercise!</p>
    </div>
  );
};