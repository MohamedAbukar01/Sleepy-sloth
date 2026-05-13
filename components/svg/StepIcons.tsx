export function StepClock({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="26" fill="#2D2A40" stroke="#94A286" strokeWidth="2" />
      <path d="M32 16 v18 l12 6" stroke="#F2EDE2" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="32" r="2" fill="#F2EDE2" />
    </svg>
  );
}

export function StepCandle({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="22" y="28" width="20" height="26" rx="3" fill="#7A8A6E" />
      <rect x="22" y="28" width="20" height="5" rx="2" fill="#5F6E55" />
      <path d="M32 12 q-6 6 -6 10 a6 6 0 0 0 12 0 q0 -4 -6 -10z" fill="#E9B89A" />
      <path d="M32 18 q-3 3 -3 5 a3 3 0 0 0 6 0 q0 -2 -3 -5z" fill="#F4D2B8" />
    </svg>
  );
}

export function StepMoon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#2D2A40" />
      <path
        d="M40 16 a18 18 0 1 0 8 30 14 14 0 0 1 -8 -30z"
        fill="#F2EDE2"
      />
      <circle cx="20" cy="20" r="1.4" fill="#F2EDE2" opacity="0.7" />
      <circle cx="14" cy="42" r="1.2" fill="#F2EDE2" opacity="0.7" />
    </svg>
  );
}
