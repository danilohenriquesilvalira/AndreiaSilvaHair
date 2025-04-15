// assets/icons/PauseIcon.tsx
import React from 'react';

const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {...props}
  >
    <path 
      d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" 
      fill="currentColor" 
    />
  </svg>
);

export default PauseIcon;