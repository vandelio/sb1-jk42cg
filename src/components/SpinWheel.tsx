import React from 'react';
import { Exercise } from '../data/exercises';
import { WheelSlice } from './wheel/WheelSlice';
import { WheelPointer } from './wheel/WheelPointer';

interface SpinWheelProps {
  exercises: Exercise[];
  rotation: number;
  isSpinning: boolean;
}

export const SpinWheel: React.FC<SpinWheelProps> = ({ exercises, rotation, isSpinning }) => {
  const wheelSize = 400;
  const center = wheelSize / 2;
  const radius = wheelSize / 2 - 10;

  return (
    <div className="relative" style={{ width: wheelSize, height: wheelSize }}>
      <WheelPointer />
      
      <svg
        width={wheelSize}
        height={wheelSize}
        viewBox={`0 0 ${wheelSize} ${wheelSize}`}
        className={`transition-transform duration-[var(--spin-time)] ease-out ${
          isSpinning ? '' : 'transition-none'
        } drop-shadow-xl`}
        style={{
          '--spin-time': '3s',
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* Outer circle for clean edge */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        />
        
        {exercises.map((exercise, index) => (
          <WheelSlice
            key={exercise.id}
            exercise={exercise}
            index={index}
            totalSlices={exercises.length}
            center={center}
            radius={radius}
          />
        ))}
        
        {/* Center dot */}
        <circle
          cx={center}
          cy={center}
          r="8"
          fill="#fff"
          className="drop-shadow-md"
        />
      </svg>
    </div>
  );
};