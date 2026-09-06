import RoyalCrown from "./RoyalCrown.jsx";

export default function CrownMark({ onDark  = false }) {
  return (
    <div className="flex flex-col items-center">
      <RoyalCrown className="h-7 w-9 text-gold" />
      <span className={`mt-2 font-royal text-[22px] font-semibold tracking-[0.3em] ${onDark ? "text-cream" : "text-cocoa"}`}>
        CELMORA 
      </span>
      <span className={`text-[8px] uppercase tracking-[0.45em] ${onDark ? "text-cream/60" : "text-cocoa/60"}`}>
        Royal Chocolates
      </span>
      <div className="mt-4  flex items-center gap-1">
        <span className="h-px w-8 bg-gold/60" />
        <span className="h-1 w-1 rotate-45 bg-gold" />
        <span className="h-px w-8 bg-gold/60" />
      </div>
    </div>
  );
}