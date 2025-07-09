import React from 'react';

// Team Collaboration Icon
export const TeamIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4Z" 
            fill={color}
        />
        <path 
            d="M8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6Z" 
            fill={color}
        />
        <path 
            d="M15 14C17.7614 14 20 16.2386 20 19V20C20 20.5523 19.5523 21 19 21H13C12.4477 21 12 20.5523 12 20V19C12 16.2386 14.2386 14 17 14H15Z" 
            fill={color}
        />
        <path 
            d="M8 14C10.7614 14 13 16.2386 13 19V20C13 20.5523 12.5523 21 12 21H4C3.44772 21 3 20.5523 3 20V19C3 16.2386 5.23858 14 8 14Z" 
            fill={color}
        />
    </svg>
);

// Learning & Growth Icon
export const GrowthIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M12 2L15.09 8.26L22 9L17 13.74L18.18 20.5L12 17.27L5.82 20.5L7 13.74L2 9L8.91 8.26L12 2Z" 
            fill={color}
        />
        <path 
            d="M12 6L13.5 10.5L18 11L15 13.5L15.75 18L12 16L8.25 18L9 13.5L6 11L10.5 10.5L12 6Z" 
            fill="white"
        />
        <circle cx="12" cy="11" r="2" fill={color} />
    </svg>
);

// Work-Life Balance Icon
export const BalanceIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
        />
        <path 
            d="M8 12L10 14L16 8" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <path 
            d="M12 6V12L16 16" 
            stroke={color} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

// Location Icon
export const LocationIcon = ({ size = 16, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" 
            fill={color}
        />
        <circle cx="12" cy="10" r="3" fill="white" />
    </svg>
);

// Clock Icon
export const ClockIcon = ({ size = 16, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
        />
        <path 
            d="M12 6V12L16 14" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

// Arrow Right Icon
export const ArrowRightIcon = ({ size = 16, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

// Certificate Icon
export const CertificateIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect 
            x="3" 
            y="3" 
            width="18" 
            height="12" 
            rx="2" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
        />
        <path 
            d="M7 19L10 16L13 19L10 21L7 19Z" 
            fill={color}
        />
        <path 
            d="M7 7H17M7 11H14" 
            stroke={color} 
            strokeWidth="1.5" 
            strokeLinecap="round"
        />
        <circle cx="17" cy="9" r="1" fill={color} />
    </svg>
);

// Building Icon for Company
export const BuildingIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M3 21H21M4 18V7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7V18M12 18V9C12 8.44772 12.4477 8 13 8H19C19.5523 8 20 8.44772 20 9V18M12 18H4M12 18H20" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <rect x="6" y="10" width="2" height="2" fill={color} />
        <rect x="6" y="14" width="2" height="2" fill={color} />
        <rect x="9" y="10" width="2" height="2" fill={color} />
        <rect x="14" y="12" width="2" height="2" fill={color} />
        <rect x="17" y="12" width="2" height="2" fill={color} />
        <rect x="14" y="15" width="2" height="2" fill={color} />
        <rect x="17" y="15" width="2" height="2" fill={color} />
    </svg>
); 