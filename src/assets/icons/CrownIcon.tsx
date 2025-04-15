// assets/icons/CrownIcon.tsx
import React from 'react';

const CrownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {...props}
  >
    <path 
      d="M5 16l-3-10 7 5 5-7 5 7 7-5-3 10h-18zm19 2v2h-20v-2h20z" 
      fill="currentColor" 
    />
  </svg>
);

export default CrownIcon;
