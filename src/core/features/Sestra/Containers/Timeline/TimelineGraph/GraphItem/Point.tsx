import React, { FC } from 'react';
import { GraphColors } from '../TimelineGraph';

type PointProps = { color?: GraphColors };

const Point: FC<PointProps> = ({ color = GraphColors.GREY }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="22" fill={color} />
      <circle cx="22" cy="22" r="12" fill="white" />
    </svg>
  );
};

export default Point;
