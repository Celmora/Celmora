import { Menu, Search, Heart, Share2, Bell } from "lucide-react";
import CrownMark from "./CrownMark.jsx";

const links = [
  { label: "Home", active: true },
  { label: "Collections" },
  { label: "Royal Casket" },
  { label: "About Us" },
  { label: "Journal" },
];

export default function TopNavBar({ onMenuClick }) {
  return (
    <header className="absolute top-0 left-0 z-20 w-full px-10 py-6">
      <div className="flex items-center justify-between">

        {/* LEFT — menu + logo */}
        <div className="flex items-center gap-6">
          <button onClick={onMenuClick} className="rounded-full bg-cocoa p-3 text-cream">
            <Menu className="h-5 w-5" />
          </button>
          <CrownMark />
        </div>

        {/* CENTER — nav links */}
        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? "relative text-[11px] font-bold uppercase tracking-[0.3em] text-cocoa after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-gold"
                  : "text-[11px] uppercase tracking-[0.2em] text-white hover:text-gold-bright"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT — actions + bell */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-3 text-pink-200 hover:text-red-300/90">
            <Search className="h-4 w-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Search</span>
          </button>

          <span className="h-4 w-px bg-pink-200" />

          <button className="flex items-center gap-3  text-pink-200 hover:text-red-300/90">
            <Heart className="h-4 w-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Wishlist</span>
          </button>

          <span className="h-4 w-px bg-pink-200" />

          <button className="flex items-center gap-3 text-pink-200 hover:text-red-300/90">
            <Share2 className="h-4 w-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Share</span>
          </button>

          <button className="relative rounded-xl border border-gold/60 bg-cream p-2.5 text-cocoa">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose text-[9px] font-semibold text-white">
              2
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}