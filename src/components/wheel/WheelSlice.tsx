import React from 'react';
import { Exercise } from '../../data/exercises';

interface WheelSliceProps {
  exercise: Exercise;
  index: number;
  totalSlices: number;
  center: number;
  radius: number;
}

export const WheelSlice: React.FC<WheelSliceProps> = ({
  exercise,
  index,
  totalSlices,
  center,
  radius,
}) => {
  const sliceAngle = 360 / totalSlices;
  const startAngle = index * sliceAngle;

  const getSlicePath = (): string => {
    const endAngle = startAngle + sliceAngle;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);
    
    const largeArcFlag = sliceAngle <= 180 ? "0" : "1";
    
    return `M ${center},${center}
            L ${x1},${y1}
            A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}
            Z`;
  };

  const getTextPosition = () => {
    const angle = index * sliceAngle + sliceAngle / 2;
    const rad = (angle * Math.PI) / 180;
    const distance = radius * 0.65;
    return {
      x: center + distance * Math.cos(rad),
      y: center + distance * Math.sin(rad),
      rotation: angle
    };
  };

  const textPos = getTextPosition();

  return (
    <g>
      <path
        d={getSlicePath()}
        fill={exercise.color}
        stroke="#fff"
        strokeWidth="2"
        className="transition-colors duration-200"
      />
      <g transform={`translate(${textPos.x},${textPos.y}) rotate(${textPos.rotation + 90})`}>
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          className="text-sm font-bold"
          transform="rotate(-90)"
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          {exercise.name}
        </text>
      </g>
    </g>
  );
};