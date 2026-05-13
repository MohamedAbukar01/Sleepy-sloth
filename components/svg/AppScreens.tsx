type Props = { className?: string };

function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 220 440"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#221F33" />
          <stop offset="100%" stopColor="#141822" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="212" height="432" rx="34" fill="url(#bezel)" />
      <rect x="10" y="10" width="200" height="420" rx="28" fill="#0F1117" />
      <rect x="14" y="14" width="192" height="412" rx="24" fill="#1B1F2A" />
      <rect x="92" y="18" width="36" height="8" rx="4" fill="#0F1117" />
      {children}
    </svg>
  );
}

export function ScreenBedtime({ className }: Props) {
  return (
    <PhoneFrame className={className} label="Bedtime setup screen">
      <text x="110" y="58" textAnchor="middle" fill="#F2EDE2" fontSize="11" fontFamily="serif" fontStyle="italic">
        Tonight
      </text>
      <text x="110" y="94" textAnchor="middle" fill="#F2EDE2" fontSize="22" fontFamily="serif">
        10:30 PM
      </text>
      <rect x="34" y="120" width="152" height="180" rx="76" fill="#2D2A40" />
      <circle cx="110" cy="210" r="56" fill="#94A286" />
      <circle cx="96" cy="200" r="3" fill="#0F1117" />
      <circle cx="124" cy="200" r="3" fill="#0F1117" />
      <path d="M100 218 q10 6 20 0" stroke="#0F1117" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <rect x="34" y="324" width="152" height="36" rx="18" fill="#F2EDE2" />
      <text x="110" y="346" textAnchor="middle" fill="#0F1117" fontSize="11" fontFamily="sans-serif">
        Start wind down
      </text>
      <text x="110" y="384" textAnchor="middle" fill="#F2EDE2" fontSize="9" opacity="0.65" fontFamily="sans-serif">
        Sam is getting sleepy
      </text>
    </PhoneFrame>
  );
}

export function ScreenSlothRoom({ className }: Props) {
  return (
    <PhoneFrame className={className} label="Sloth in hammock at night">
      <rect x="14" y="14" width="192" height="412" rx="24" fill="#221F33" />
      <circle cx="166" cy="80" r="20" fill="#F2EDE2" />
      <circle cx="158" cy="76" r="16" fill="#221F33" />
      <g fill="#F2EDE2" opacity="0.7">
        <circle cx="50" cy="60" r="1.2" />
        <circle cx="80" cy="100" r="1" />
        <circle cx="36" cy="140" r="1.4" />
        <circle cx="180" cy="160" r="1.2" />
      </g>
      <rect x="22" y="240" width="10" height="120" rx="3" fill="#3A3252" />
      <rect x="188" y="240" width="10" height="120" rx="3" fill="#3A3252" />
      <path d="M32 268 C 80 296 140 296 188 268" stroke="#94A286" strokeWidth="2" fill="none" />
      <path d="M32 280 C 80 360 140 360 188 280 C 140 340 80 340 32 280 Z" fill="#7A8A6E" />
      <ellipse cx="110" cy="306" rx="40" ry="22" fill="#94A286" />
      <ellipse cx="92" cy="294" rx="20" ry="18" fill="#94A286" />
      <ellipse cx="92" cy="298" rx="14" ry="11" fill="#D2C6A8" />
      <path d="M84 296 q4 -2 8 0" stroke="#0F1117" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M96 296 q4 -2 8 0" stroke="#0F1117" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <text x="110" y="394" textAnchor="middle" fill="#F2EDE2" fontSize="10" opacity="0.75" fontFamily="serif" fontStyle="italic">
        Sleepy Sam is dozing
      </text>
    </PhoneFrame>
  );
}

export function ScreenSounds({ className }: Props) {
  const items = ["Rain", "Forest", "Hammock", "Crackling fire", "Ocean", "Pink noise"];
  return (
    <PhoneFrame className={className} label="Sound library screen">
      <text x="110" y="58" textAnchor="middle" fill="#F2EDE2" fontSize="14" fontFamily="serif">
        Sounds
      </text>
      {items.map((label, i) => (
        <g key={label}>
          <rect
            x="22"
            y={84 + i * 46}
            width="176"
            height="36"
            rx="8"
            fill={i === 1 ? "#2D2A40" : "#1B1F2A"}
            stroke="#3A3653"
            strokeWidth="0.6"
          />
          <circle cx="42" cy={102 + i * 46} r="9" fill={i === 1 ? "#94A286" : "#3A3653"} />
          <path
            d={i === 1 ? "M39 99 v6 M45 99 v6" : "M40 102 l4 -3 v6 z"}
            stroke="#F2EDE2"
            strokeWidth="1.4"
            fill={i === 1 ? "none" : "#F2EDE2"}
            strokeLinecap="round"
          />
          <text x="62" y={107 + i * 46} fill="#F2EDE2" fontSize="10" fontFamily="sans-serif">
            {label}
          </text>
        </g>
      ))}
    </PhoneFrame>
  );
}

export function ScreenMorning({ className }: Props) {
  return (
    <PhoneFrame className={className} label="Morning letter screen">
      <defs>
        <linearGradient id="morn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3653" />
          <stop offset="60%" stopColor="#D89A77" />
          <stop offset="100%" stopColor="#F4D2B8" />
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="192" height="412" rx="24" fill="url(#morn)" />
      <circle cx="110" cy="100" r="22" fill="#F2EDE2" opacity="0.95" />
      <rect x="34" y="160" width="152" height="200" rx="14" fill="#F2EDE2" />
      <text x="110" y="188" textAnchor="middle" fill="#5F6E55" fontSize="11" fontFamily="serif" fontStyle="italic">
        Good morning
      </text>
      <text x="46" y="220" fill="#3A3252" fontSize="9" fontFamily="serif">
        Sam slept for 7.5 hours
      </text>
      <text x="46" y="238" fill="#3A3252" fontSize="9" fontFamily="serif">
        and dreamt of clouds.
      </text>
      <text x="46" y="270" fill="#3A3252" fontSize="9" fontFamily="serif">
        You put your phone down
      </text>
      <text x="46" y="284" fill="#3A3252" fontSize="9" fontFamily="serif">
        at 10:32 PM.
      </text>
      <text x="46" y="316" fill="#3A3252" fontSize="9" fontFamily="serif" fontStyle="italic">
        Sam was very proud.
      </text>
      <rect x="60" y="332" width="100" height="22" rx="11" fill="#2D2A40" />
      <text x="110" y="347" textAnchor="middle" fill="#F2EDE2" fontSize="9">Continue</text>
    </PhoneFrame>
  );
}

export function ScreenSadSloth({ className }: Props) {
  return (
    <PhoneFrame className={className} label="Sloth woke up sad screen">
      <rect x="14" y="14" width="192" height="412" rx="24" fill="#1B1F2A" />
      <ellipse cx="110" cy="220" rx="64" ry="50" fill="#94A286" />
      <ellipse cx="110" cy="226" rx="44" ry="34" fill="#B9C4A8" />
      <ellipse cx="92" cy="174" rx="36" ry="32" fill="#94A286" />
      <ellipse cx="92" cy="182" rx="26" ry="22" fill="#D2C6A8" />
      <circle cx="80" cy="176" r="3.6" fill="#0F1117" />
      <circle cx="104" cy="176" r="3.6" fill="#0F1117" />
      <path d="M70 162 q9 -4 18 2" stroke="#3A3252" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M96 164 q9 -4 18 0" stroke="#3A3252" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="92" cy="190" rx="3" ry="2" fill="#3A3252" />
      <path d="M87 198 q5 -3 10 0" stroke="#3A3252" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M80 184 q0 5 -2 8" stroke="#B4A7D6" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <text x="110" y="320" textAnchor="middle" fill="#F2EDE2" fontSize="11" fontFamily="serif" fontStyle="italic">
        Sam woke up
      </text>
      <text x="110" y="338" textAnchor="middle" fill="#F2EDE2" fontSize="10" opacity="0.7" fontFamily="sans-serif">
        Put me down?
      </text>
    </PhoneFrame>
  );
}

export function ScreenCozyMeter({ className }: Props) {
  return (
    <PhoneFrame className={className} label="Cozy Meter progress screen">
      <text x="110" y="58" textAnchor="middle" fill="#F2EDE2" fontSize="13" fontFamily="serif">
        Cozy Meter
      </text>
      <circle cx="110" cy="180" r="64" fill="none" stroke="#221F33" strokeWidth="14" />
      <circle
        cx="110"
        cy="180"
        r="64"
        fill="none"
        stroke="#B4A7D6"
        strokeWidth="14"
        strokeDasharray="402"
        strokeDashoffset="120"
        strokeLinecap="round"
        transform="rotate(-90 110 180)"
      />
      <text x="110" y="184" textAnchor="middle" fill="#F2EDE2" fontSize="22" fontFamily="serif">
        72%
      </text>
      <text x="110" y="262" textAnchor="middle" fill="#F2EDE2" fontSize="10" opacity="0.7" fontFamily="sans-serif">
        14 cozy nights this month
      </text>
      <g>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={32 + i * 38}
            y={302}
            width={28}
            height={48}
            rx={6}
            fill={i < 3 ? "#3A3653" : "#1B1F2A"}
            stroke="#3A3653"
          />
        ))}
      </g>
      <text x="110" y="380" textAnchor="middle" fill="#F2EDE2" fontSize="9" opacity="0.6">
        Hammock styles unlocked
      </text>
    </PhoneFrame>
  );
}
