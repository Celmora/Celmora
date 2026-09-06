import { ArrowRight } from "lucide-react";
import RoyalCrown from "../common/RoyalCrown.jsx";

export default function RoyalCard({ title, description, image }) {
  return (
    <div
      className="royal-frame royal-slow group w-full transition-transform duration-300 hover:-translate-y-1.5"
      style={{ "--royal-radius": "20px" }}
    >
      <div className="relative flex min-h-65 flex-col justify-between overflow-hidden bg-linear-to-br from-[#2a1710] to-[#150a07] p-6">

        {/* AI image layer */}
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* deep black cinematic veil — 70% */}
        <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:opacity-55" />

        {/* content */}
        <div className="relative">
          <RoyalCrown className="h-4 w-6 text-gold" />
          <h3 className="mt-3 font-royal text-lg uppercase tracking-[0.14em] text-gold">
            {title}
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-cream/70">
            {description}
          </p>
        </div>

        <div className="relative mt-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-cocoa">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}