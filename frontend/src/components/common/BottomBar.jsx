import { useEffect, useState } from "react";
import { Home, LayoutGrid, ShoppingBag, User, Crown } from "lucide-react";
import RoyalButton from "./RoyalButton.jsx";

const items = [
  { label: "Home", icon: Home, active: true },
  { label: "Collections", icon: LayoutGrid },
  { label: "Royal Casket", icon: ShoppingBag },
  { label: "Profile", icon: User },
];

export default function BottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-10 right-10 z-30 hidden transition-all duration-500 ease-out md:block ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-32 opacity-0"
      }`}
    >
      <div className="royal-frame royal-slow w-full">
        <div className="flex items-center justify-between bg-cocoa/95 px-8 py-3.5 backdrop-blur-md">

          {/* LEFT — nav */}
          <nav className="flex items-center gap-6">
            {items.map((item, i) => (
              <div key={item.label} className="flex items-center gap-6">
                {i > 0 && <span className="h-6 w-px bg-cream/10" />}
                <button
                  className={`flex items-center gap-2.5 transition-colors ${
                    item.active ? "text-cream" : "text-cream/50 hover:text-cream/80"
                  }`}
                >
                  <item.icon
                    className={`h-4.5 w-4.5 ${item.active ? "text-rose" : ""}`}
                    fill={item.active ? "currentColor" : "none"}
                  />
                  <span className="text-[12px] tracking-[0.08em]">{item.label}</span>
                </button>
              </div>
            ))}
          </nav>

          {/* RIGHT — CTA + price */}
          <div className="flex items-center gap-6">
            <RoyalButton icon={Crown} iconBare radius="14px">
              Add to Royal Casket
            </RoyalButton>

            <div className="border-l border-cream/10 pl-6 text-right">
              <p className="font-royal text-2xl leading-none text-cream">₹950</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-cream/50">
                Per Piece
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}