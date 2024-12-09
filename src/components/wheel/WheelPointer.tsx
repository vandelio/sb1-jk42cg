import React from 'react';

export const WheelPointer: React.FC = () => {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
      <div 
        className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-500 drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
      />
    </div>
  );
};