// Hero Book Illustration
export const BookHeroIllustration = () => (
  <svg viewBox="0 0 500 400" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    
    {/* Open Book */}
    <g transform="translate(100, 100)">
      {/* Left Page */}
      <path
        d="M 0 50 Q 0 30 20 20 L 140 20 L 140 250 L 20 250 Q 0 240 0 220 Z"
        fill="white"
        stroke="#3B82F6"
        strokeWidth="3"
      />
      {/* Text lines on left page */}
      <line x1="30" y1="60" x2="120" y2="60" stroke="#93C5FD" strokeWidth="2" />
      <line x1="30" y1="80" x2="120" y2="80" stroke="#93C5FD" strokeWidth="2" />
      <line x1="30" y1="100" x2="110" y2="100" stroke="#93C5FD" strokeWidth="2" />
      <line x1="30" y1="120" x2="120" y2="120" stroke="#93C5FD" strokeWidth="2" />
      
      {/* Right Page */}
      <path
        d="M 140 20 L 260 20 Q 280 30 280 50 L 280 220 Q 280 240 260 250 L 140 250 Z"
        fill="white"
        stroke="#3B82F6"
        strokeWidth="3"
      />
      {/* Text lines on right page */}
      <line x1="160" y1="60" x2="250" y2="60" stroke="#93C5FD" strokeWidth="2" />
      <line x1="160" y1="80" x2="250" y2="80" stroke="#93C5FD" strokeWidth="2" />
      <line x1="160" y1="100" x2="240" y2="100" stroke="#93C5FD" strokeWidth="2" />
      <line x1="160" y1="120" x2="250" y2="120" stroke="#93C5FD" strokeWidth="2" />
      
      {/* Book Spine */}
      <rect x="137" y="20" width="6" height="230" fill="url(#bookGradient)" />
    </g>
    
    {/* Floating Stars */}
    <circle cx="80" cy="80" r="4" fill="#3B82F6" opacity="0.6">
      <animate attributeName="cy" values="80;70;80" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="420" cy="100" r="3" fill="#60A5FA" opacity="0.6">
      <animate attributeName="cy" values="100;90;100" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="400" cy="280" r="4" fill="#3B82F6" opacity="0.6">
      <animate attributeName="cy" values="280;270;280" dur="2.2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Adventure Book Icon
export const AdventureIcon = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
    <defs>
      <linearGradient id="adventureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Mountain */}
    <path
      d="M 20 150 L 80 60 L 100 90 L 140 40 L 180 150 Z"
      fill="url(#adventureGradient)"
    />
    <path
      d="M 80 60 L 100 90 L 90 90 L 75 70 Z"
      fill="white"
      opacity="0.3"
    />
    
    {/* Flag */}
    <line x1="140" y1="40" x2="140" y2="20" stroke="#1E40AF" strokeWidth="2" />
    <path d="M 140 20 L 160 25 L 140 30 Z" fill="#3B82F6" />
  </svg>
);

// Fairy Tale Icon
export const FairyTaleIcon = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
    <defs>
      <linearGradient id="fairyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Castle */}
    <rect x="60" y="100" width="80" height="70" fill="url(#fairyGradient)" rx="2" />
    <rect x="75" y="130" width="20" height="40" fill="white" opacity="0.3" />
    
    {/* Towers */}
    <rect x="50" y="70" width="20" height="100" fill="url(#fairyGradient)" />
    <rect x="130" y="70" width="20" height="100" fill="url(#fairyGradient)" />
    
    {/* Tower tops */}
    <path d="M 45 70 L 60 40 L 75 70 Z" fill="#1E40AF" />
    <path d="M 125 70 L 140 40 L 155 70 Z" fill="#1E40AF" />
    
    {/* Windows */}
    <circle cx="100" cy="120" r="6" fill="#DBEAFE" />
    <circle cx="60" cy="90" r="4" fill="#DBEAFE" />
    <circle cx="140" cy="90" r="4" fill="#DBEAFE" />
    
    {/* Star */}
    <path
      d="M 100 25 L 105 35 L 115 35 L 107 42 L 110 52 L 100 45 L 90 52 L 93 42 L 85 35 L 95 35 Z"
      fill="#60A5FA"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 100 40"
        to="360 100 40"
        dur="4s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

// Science Icon
export const ScienceIcon = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
    <defs>
      <linearGradient id="scienceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Flask */}
    <rect x="85" y="40" width="30" height="30" fill="white" stroke="#3B82F6" strokeWidth="2" />
    <path
      d="M 85 70 L 60 140 Q 55 150 60 160 L 140 160 Q 145 150 140 140 L 115 70 Z"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="3"
    />
    
    {/* Liquid */}
    <path
      d="M 87 90 L 65 145 Q 62 152 65 157 L 135 157 Q 138 152 135 145 L 113 90 Z"
      fill="url(#scienceGradient)"
      opacity="0.7"
    />
    
    {/* Bubbles */}
    <circle cx="80" cy="120" r="5" fill="#DBEAFE">
      <animate attributeName="cy" values="120;80;120" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="140" r="4" fill="#DBEAFE">
      <animate attributeName="cy" values="140;90;140" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="115" cy="130" r="6" fill="#DBEAFE">
      <animate attributeName="cy" values="130;85;130" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2.8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Reading Person Illustration
export const ReadingPersonIllustration = () => (
  <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
    <defs>
      <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    
    {/* Person sitting */}
    {/* Head */}
    <circle cx="150" cy="80" r="25" fill="url(#personGradient)" />
    
    {/* Body */}
    <rect x="130" y="100" width="40" height="60" rx="5" fill="url(#personGradient)" />
    
    {/* Arms */}
    <rect x="100" y="110" width="30" height="12" rx="6" fill="#60A5FA" />
    <rect x="170" y="110" width="30" height="12" rx="6" fill="#60A5FA" />
    
    {/* Book */}
    <rect x="115" y="120" width="70" height="50" rx="3" fill="white" stroke="#3B82F6" strokeWidth="3" />
    <line x1="150" y1="125" x2="150" y2="165" stroke="#3B82F6" strokeWidth="2" />
    <line x1="125" y1="135" x2="145" y2="135" stroke="#93C5FD" strokeWidth="2" />
    <line x1="125" y1="145" x2="145" y2="145" stroke="#93C5FD" strokeWidth="2" />
    <line x1="155" y1="135" x2="175" y2="135" stroke="#93C5FD" strokeWidth="2" />
    <line x1="155" y1="145" x2="175" y2="145" stroke="#93C5FD" strokeWidth="2" />
    
    {/* Legs */}
    <rect x="130" y="160" width="15" height="40" rx="5" fill="#60A5FA" />
    <rect x="155" y="160" width="15" height="40" rx="5" fill="#60A5FA" />
    
    {/* Hearts floating */}
    <path d="M 220 100 Q 215 95 210 100 Q 205 95 200 100 Q 200 110 210 120 Q 220 110 220 100 Z" fill="#3B82F6" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);
