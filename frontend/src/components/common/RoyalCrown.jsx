export default function RoyalCrown({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 14 L16 30 L32 8 L48 30 L58 14 L52 40 H12 Z"
        fill="currentColor"
      />
      <rect x="11" y="40" width="42" height="5" rx="2.5" fill="currentColor" />
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="58" cy="12" r="3" fill="currentColor" />
      <circle cx="32" cy="6" r="3.4" fill="currentColor" />
      <circle cx="32" cy="27" r="2.6" fill="#16100c" />
    </svg>
  );
}