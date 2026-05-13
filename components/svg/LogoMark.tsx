export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="16" cy="16" r="15" fill="#2D2A40" />
      <path
        d="M9 13c0-3 2.5-5 7-5s7 2 7 5c0 2-1.2 3.6-3 4.4V20c0 2.2-1.8 4-4 4s-4-1.8-4-4v-2.6C10.2 16.6 9 15 9 13Z"
        fill="#94A286"
      />
      <circle cx="13.5" cy="13" r="1.2" fill="#0F1117" />
      <circle cx="18.5" cy="13" r="1.2" fill="#0F1117" />
      <path
        d="M13.5 16.5c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1"
        stroke="#0F1117"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
