export default function Logo() {
  return (
    <svg
      className="logo-piscinova"
      viewBox="0 0 320 82"
      role="img"
      aria-labelledby="logoTitle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="logoTitle">Piscinova</title>
      <defs>
        <linearGradient id="pnText" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="pnIcon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="55%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="pnSun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <g transform="translate(4 9)">
        <circle
          cx="32"
          cy="32"
          r="31"
          fill="rgba(255,255,255,0.10)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
        />
        <path
          d="M13 36c8 5 15 5 24-1 9-6 17-6 28 0-11 10-22 12-34 5-7-4-12-4-18-4Z"
          fill="url(#pnIcon)"
        />
        <path
          d="M18 28c8 4 15 3 23-3 9-6 17-6 27-1-10 8-20 9-31 3-7-3-12-2-19 1Z"
          fill="#7dd3fc"
        />
        <circle cx="49" cy="18" r="9" fill="url(#pnSun)" />
        <path
          d="M49 4v7M49 25v7M35 18h7M56 18h7M39 8l5 5M58 8l-5 5"
          stroke="#fde047"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <text
        x="80"
        y="52"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="43"
        fontWeight="900"
        letterSpacing="-2.2"
        fill="url(#pnText)"
      >
        Piscinova
      </text>
      <path
        d="M83 63c37 8 65 8 103 0 39-8 74-8 117 0"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
