import { useState } from "react";

function buildPlaceholder(title) {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `data:image/svg+xml;utf8,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="%2301647c"/>
        <stop offset="55%" stop-color="%230284c7"/>
        <stop offset="100%" stop-color="%2306b6d4"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(%23bg)"/>
    <circle cx="965" cy="135" r="68" fill="%23fde047" opacity="0.92"/>
    <path d="M0 575 C 170 515, 285 655, 430 600 S 735 505, 905 570 S 1080 665, 1200 620 L 1200 800 L 0 800 Z" fill="%23e0f2fe" opacity="0.82"/>
    <path d="M0 630 C 150 590, 290 735, 455 665 S 760 565, 930 640 S 1085 735, 1200 700 L 1200 800 L 0 800 Z" fill="%23bae6fd"/>
    <text x="90" y="120" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700">Sustituye esta imagen por tu foto real</text>
    <text x="90" y="184" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900">${safeTitle}</text>
  </svg>`;
}

export default function SmartImage({ src, alt, className, placeholderTitle, ...rest }) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = hasError ? buildPlaceholder(placeholderTitle || alt) : src;

  return (
    <img
      {...rest}
      className={className}
      src={resolvedSrc}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
