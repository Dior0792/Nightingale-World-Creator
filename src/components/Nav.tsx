import { useState } from "react";

type Page = "home" | "profile" | "resources" | "membership";

interface NavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NightingaleLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
    <path d="M8 22 C8 22, 10 18, 14 16 C12 14, 11 11, 13 9 C15 7, 18 8, 19 10 C20 12, 18 14, 16 15 C19 15, 22 14, 24 16 C22 16, 20 17, 19 19 C21 19, 23 20, 23 22 C21 21, 19 20.5, 17 21 C15 21.5, 11 24, 8 22Z" fill="#a855f7" opacity="0.9"/>
    <circle cx="19" cy="10" r="1" fill="white" opacity="0.8"/>
  </svg>
);

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links: { label: string; page: Page }[] = [
    { label: "Explore", page: "home" },
    { label: "Creators", page: "profile" },
    { label: "Resources", page: "resources" },
    { label: "Membership", page: "membership" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.0) 100%)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 group"
        >
          <NightingaleLogo />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white text-lg tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.15em" }}>NIGHTINGALE</span>
            <span className="text-xs tracking-[0.3em] text-purple-400 font-mono-label">WORLD</span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => onNavigate(l.page)}
              className={`text-sm tracking-wider transition-colors duration-200 ${
                currentPage === l.page
                  ? "text-purple-300 font-medium"
                  : "text-white/60 hover:text-white/90"
              }`}
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.12em", fontSize: "0.9rem" }}
            >
              {l.label}
              {currentPage === l.page && (
                <div className="h-px bg-purple-400 mt-0.5 opacity-80" />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}>
            Sign In
          </button>
          <button
            onClick={() => onNavigate("membership")}
            className="px-5 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}
          >
            Join Free
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-px w-6 bg-white/80 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block h-px w-6 bg-white/80 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white/80 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-white/10 pt-4" style={{ background: "rgba(0,0,0,0.97)" }}>
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => { onNavigate(l.page); setMenuOpen(false); }}
              className={`text-left text-base tracking-wider transition-colors ${
                currentPage === l.page ? "text-purple-300" : "text-white/70"
              }`}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate("membership"); setMenuOpen(false); }}
            className="mt-2 px-5 py-2.5 text-sm font-medium text-white rounded-md w-full"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
          >
            Join Free
          </button>
        </div>
      )}
    </nav>
  );
}
