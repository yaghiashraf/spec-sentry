export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer abstract shield/hexagon */}
      <path d="M12 2L3 7v6c0 5.5 4 10 9 11 5-1 9-5.5 9-11V7l-9-5z" />
      {/* Inner API brackets forming a 'guard' eye */}
      <path d="M8.5 10.5L6.5 12l2 1.5" />
      <path d="M15.5 10.5L17.5 12l-2 1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
