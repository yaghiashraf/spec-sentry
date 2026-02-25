export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-label="SpecSentry Logo"
    >
      <defs>
        {/* Deep Tech Indigo to Blue Gradient */}
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo 600 */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Blue 600 */}
        </linearGradient>
        
        {/* Vibrant Cyan to Indigo Gradient for nodes */}
        <linearGradient id="secondaryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" /> {/* Cyan 500 */}
          <stop offset="100%" stopColor="#6366F1" /> {/* Indigo 500 */}
        </linearGradient>
        
        {/* Glowing Sentry Core Effect */}
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. Outer Hexagonal Shield (Represents "Guard" & Infrastructure) */}
      <path
        d="M60 10 L105 32.5 V87.5 L60 110 L15 87.5 V32.5 Z"
        fill="url(#primaryGradient)"
        fillOpacity="0.1"
        stroke="url(#primaryGradient)"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* 2. The API Contract Nodes (Represents "Specs" & Endpoints) */}
      <circle cx="30" cy="45" r="4" fill="url(#secondaryGradient)" />
      <circle cx="90" cy="45" r="4" fill="url(#secondaryGradient)" />
      <circle cx="30" cy="75" r="4" fill="url(#secondaryGradient)" />
      <circle cx="90" cy="75" r="4" fill="url(#secondaryGradient)" />
      
      {/* 3. Connecting Paths (Represents "Contract Validation" & JSON structures) */}
      <path
        d="M30 45 L50 60 L30 75"
        stroke="url(#secondaryGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M90 45 L70 60 L90 75"
        stroke="url(#secondaryGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 4. Central stylized "S" (SpecSentry Brand Initial) */}
      <path
        d="M68 40 C68 33 52 33 52 40 C52 47 68 53 68 60 C68 67 52 67 52 60"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5. The "Sentry" Eye / Core (Represents Continuous Monitoring) */}
      <circle cx="60" cy="50" r="6" fill="#F43F5E" filter="url(#nodeGlow)" />
    </svg>
  );
}
