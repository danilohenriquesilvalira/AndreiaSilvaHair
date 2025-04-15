// assets/icons/PlayIcon.tsx
import React from 'react';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {...props}
  >
    <path 
      d="M8 5.14v14l11-7-11-7z" 
      fill="currentColor" 
    />
  </svg>
);

export default PlayIcon;