import { Gem, Cookie, Cherry, Flower2, Milk } from "lucide-react";
import RoyalCrown from "../common/RoyalCrown.jsx";

const notes = [
  { label: "Intense & Bold", icon: Gem, pos: "left-1/2 top-1 -translate-x-1/2" },
  { label: "Nutty & Warm", icon: Cookie, pos: "right-0 top-[30%]" },
  { label: "Fruity & Bright", icon: Cherry, pos: "right-2 bottom-3" },
  { label: "Floral & Soft", icon: Flower2, pos: "left-2 bottom-3" },
  { label: "Smooth & Creamy", icon: Milk, pos: "left-0 top-[30%]" },
];

export default function FlavorWheel() {
  return (
    <div className="relative h-44 w-44 shrink-0">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_45s_linear_infinite]">
        <circle cx="100" cy="100" r="97" fill="none" stroke="#c9a24b" strokeOpacity="0.45" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#c9a24b" strokeOpacity="0.2" strokeDasharray="2 4" />
        {[90, 162, 234, 306, 18].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1="100"
              y1="100"
              x2={100 + 90 * Math.cos(rad)}
              y2={100 - 90 * Math.sin(rad)}
              stroke="#c9a24b"
              strokeOpacity="0.3"
            />
          );
        })}
        <circle cx="100" cy="100" r="30" fill="#150a07" stroke="#c9a24b" strokeOpacity="0.7" />
      </svg>

      {notes.map((note) => (
        <div
          key={note.label}
          className={`absolute ${note.pos} flex w-16 flex-col items-center gap-0.5 text-center`}
        >
          <note.icon className="h-3 w-3 text-gold" />
          <span className="text-[8px] leading-tight text-cream/70">{note.label}</span>
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <RoyalCrown className="h-2.5 w-4 text-gold" />
        <span className="font-royal text-lg leading-none text-gold">C</span>
      </div>
    </div>
  );
}