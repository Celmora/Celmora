import { X, User } from "lucide-react";
import CrownMark from "./CrownMark.jsx";

const menuLinks = ["My Profile","Collections","Offers","Wishlist", "My Orders", "Gift Cards", "Contact Support"];

export default function SideDrawer({ open, onClose }) {
  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* royal panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-gold/30 bg-cocoa/95 backdrop-blur-md transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <CrownMark onDark />
          <button
            onClick={onClose}
            className="rounded-full border border-gold/40 p-2 text-gold transition-colors hover:bg-gold hover:text-cocoa"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6">
          {menuLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`rounded-lg px-4 py-3 text-[12px] uppercase tracking-[0.2em] transition-colors ${
                i === 0
                  ? "bg-gold/10 text-gold"
                  : "text-cream/60 hover:bg-gold/5 hover:text-cream"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-gold/20 px-6 py-6">
          <button className="flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-rose to-rose-deep py-3 text-[12px] uppercase tracking-[0.25em] text-cream shadow-lg shadow-rose/25 ring-1 ring-gold/50 transition hover:shadow-rose/40">
            <User className="h-4 w-4 text-gold-bright" />
            Sign In
          </button>

          <button className="rounded-full border border-gold/50 py-3 text-[12px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-cocoa">
            Create Account
          </button>

          <p className="text-center text-[9px] tracking-[0.2em] text-cream/40">
            ROYAL ACCESS • EST. 2026
          </p>
        </div>
      </aside>
    </>
  );
}