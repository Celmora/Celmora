export default function RoyalButton({
  children,
  icon: Icon,
  iconBare = false,
  radius,
  className = "",
}) {
  return (
    <button
      className={`royal-frame btn-royal group ${className}`}
      style={radius ? { "--royal-radius": radius } : undefined}
    >
      <span className="relative flex items-center gap-4 overflow-hidden bg-linear-to-r from-rose via-[#98244a] to-rose-deep py-3 pl-8 pr-4">

        <span className="text-[12px] font-medium uppercase tracking-[0.25em] text-cream">
          {children}
        </span>

        {Icon &&
          (iconBare ? (
            <Icon className="h-4 w-4 text-gold-bright" fill="currentColor" strokeWidth={1} />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/70">
              <Icon className="h-4 w-4 text-gold-bright" />
            </span>
          ))}

        {/* golden hover sheen sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-gold-bright/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </span>
    </button>
  );
}