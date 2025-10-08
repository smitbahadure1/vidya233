interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="16" cy="16" r="15" fill="#F97316" className="drop-shadow-lg" />
        
        {/* Book/Education symbol */}
        <path
          d="M8 10C8 9.44772 8.44772 9 9 9H14C14.5523 9 15 9.44772 15 10V22C15 22.5523 14.5523 23 14 23H9C8.44772 23 8 22.5523 8 22V10Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M17 10C17 9.44772 17.4477 9 18 9H23C23.5523 9 24 9.44772 24 10V22C24 22.5523 23.5523 23 23 23H18C17.4477 23 17 22.5523 17 22V10Z"
          fill="white"
          fillOpacity="0.9"
        />
        
        {/* AI/Tech elements - circuit pattern */}
        <circle cx="11.5" cy="13" r="1" fill="#F97316" />
        <circle cx="20.5" cy="13" r="1" fill="#F97316" />
        <circle cx="11.5" cy="19" r="1" fill="#F97316" />
        <circle cx="20.5" cy="19" r="1" fill="#F97316" />
        
        {/* Language/Communication waves */}
        <path
          d="M16 6C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7C15 6.44772 15.4477 6 16 6Z"
          fill="white"
          fillOpacity="0.8"
        />
        <path
          d="M13 7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="none"
        />
        <path
          d="M19 7C19 6.44772 18.5523 6 18 6C17.4477 6 17 6.44772 17 7"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="none"
        />
      </svg>
    </div>
  );
}
