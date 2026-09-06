import { KeyRound, ChevronDown } from "lucide-react";
import RoyalCrown from "../common/RoyalCrown.jsx";
import heroImg from "../../assets/images/hero-royal.webp";
import RoyalButton from "../common/RoyalButton.jsx";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-cream">

    <div
  className="absolute inset-0 bg-contain bg-no-repeat"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: "right center",
  }}
/>
{/* cinematic veil — grades the image like a film still */}
<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-cocoa/70 via-cocoa/10 to-cocoa/80" />
      {/* soft readability glow behind the text */}
      <div className="absolute inset-y-0 left-0 w-3/5 bg-linear-to-r from-pink-200  via-cream/70 to-transparent" />
      {/* left blend — silk behind the text */}
<div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-cream via-cream/70 to-transparent" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-width-[1400px] items-center px-10 pt-24 pb-44">
        <div className="flex max-w-xl flex-col items-center text-center md:ml-52">

          {/* crown divider */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-16 bg-gold/70" />
            <RoyalCrown className="h-5 w-7 text-gold" />
            <span className="h-px w-16 bg-gold/70" />
          </div>

          {/* headline */}
          <h1 className="font-royal text-[4.6rem] font-medium leading-[0.95] text-cocoa">
            Chocolate
            <br />
            Fit for
            <br />
            the Crown
          </h1>

          {/* sub line */}
          <p className="mt-5 font-royal text-lg italic leading-relaxed text-cocoa/75">
            Rare cacao. Royal craftsmanship.
            <br />
            Timeless indulgence.
          </p>

          <RoyalButton icon={KeyRound} className="mt-9">
               Open the Vault
          </RoyalButton>

          {/* discover link */}
          <div className="mt-7 flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-cocoa/70">
              Discover the Royal Collection
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cocoa text-cream">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}