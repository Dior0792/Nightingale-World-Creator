import { useState } from "react";

type Page = "home" | "profile" | "resources" | "membership";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const NightingaleSVG = () => (
  <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Moon glow */}
    <circle cx="150" cy="150" r="130" fill="rgba(88,28,235,0.18)" />
    <circle cx="150" cy="150" r="100" fill="rgba(88,28,235,0.12)" />
    <circle cx="150" cy="150" r="70" fill="rgba(124,58,237,0.1)" />
    {/* Branch */}
    <path d="M60 260 Q100 250 140 265 Q170 275 200 270 Q230 265 260 255" stroke="rgba(168,85,247,0.5)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M140 265 Q135 240 130 220" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M180 268 Q182 248 188 232" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Nightingale body */}
    <path d="M145 240 C135 235 120 225 118 210 C116 195 125 182 138 180 C150 178 162 186 163 198 C164 210 157 220 155 230 C153 235 152 238 150 245 C148 250 146 255 150 260 C148 258 145 252 145 240Z"
      fill="#1a0840" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
    {/* Wings */}
    <path d="M138 200 C125 195 108 198 100 210 C115 208 128 212 138 208Z" fill="rgba(88,28,235,0.7)" />
    <path d="M158 200 C170 197 185 200 190 213 C178 210 165 213 158 208Z" fill="rgba(88,28,235,0.6)" />
    {/* Tail */}
    <path d="M148 238 C142 248 138 260 140 270 C143 265 145 257 148 250Z" fill="rgba(88,28,235,0.5)" />
    <path d="M152 238 C155 248 158 260 156 270 C154 265 152 257 151 250Z" fill="rgba(88,28,235,0.45)" />
    {/* Head */}
    <ellipse cx="145" cy="183" rx="12" ry="11" fill="#1a0840" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
    {/* Eye */}
    <circle cx="148" cy="181" r="2.5" fill="white" opacity="0.9"/>
    <circle cx="149" cy="181" r="1.2" fill="#1a0840"/>
    {/* Beak */}
    <path d="M155 183 L162 180 L158 185Z" fill="rgba(200,160,255,0.8)" />
    {/* Star sparkles */}
    <circle cx="80" cy="90" r="1.5" fill="white" opacity="0.6"/>
    <circle cx="210" cy="70" r="1" fill="white" opacity="0.5"/>
    <circle cx="240" cy="120" r="1.5" fill="white" opacity="0.4"/>
    <circle cx="60" cy="150" r="1" fill="white" opacity="0.5"/>
    <circle cx="220" cy="200" r="1" fill="white" opacity="0.35"/>
    <circle cx="100" cy="50" r="1" fill="rgba(200,180,255,0.8)"/>
    <circle cx="185" cy="45" r="1.5" fill="rgba(200,180,255,0.6)"/>
  </svg>
);

const creators = [
  {
    name: "Aurora Chen",
    handle: "@auroravisuals",
    role: "Visual Storyteller",
    followers: "84.2K",
    works: 312,
    img: "https://images.unsplash.com/photo-1777927519810-5feb98777717?w=400&h=400&fit=crop&auto=format",
    tag: "Film · Photography",
  },
  {
    name: "Marcus Vale",
    handle: "@marcusvale",
    role: "Sound & Score",
    followers: "61.7K",
    works: 208,
    img: "https://images.unsplash.com/photo-1770055447852-faa4d0ebfca0?w=400&h=400&fit=crop&auto=format",
    tag: "Music · Podcast",
  },
  {
    name: "Yuki Tanaka",
    handle: "@yukistudio",
    role: "Digital Illustrator",
    followers: "127.4K",
    works: 541,
    img: "https://images.unsplash.com/photo-1774689046306-f08a00221b6b?w=400&h=400&fit=crop&auto=format",
    tag: "Art · Design",
  },
  {
    name: "Leon Dross",
    handle: "@leondross",
    role: "Cinematic Director",
    followers: "93.1K",
    works: 178,
    img: "https://images.unsplash.com/photo-1763510386202-0a18d30642f8?w=400&h=400&fit=crop&auto=format",
    tag: "Video · Film",
  },
];

const features = [
  {
    num: "01",
    title: "Creator Universe",
    subtitle: "Your own digital space",
    desc: "Build a fully branded profile, curate your works into galleries, and own your creative identity across every medium.",
    accent: "#7c3aed",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#7c3aed" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="22" cy="22" r="12" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>
        <circle cx="22" cy="22" r="5" fill="#7c3aed" opacity="0.8"/>
        <circle cx="34" cy="14" r="2.5" fill="#a855f7" opacity="0.9"/>
        <circle cx="12" cy="32" r="2" fill="#7c3aed" opacity="0.7"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Creative Training Camp",
    subtitle: "Write · Film · Publish",
    desc: "Daily AI-powered writing prompts, short film challenges, and multi-platform distribution tools — all in one creative hub.",
    accent: "#d97706",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="8" width="28" height="28" rx="4" stroke="#d97706" strokeWidth="1.5" opacity="0.5"/>
        <path d="M16 22 L20 26 L28 18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="22" r="10" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Toolkit",
    subtitle: "Tool · Prompt · Automate",
    desc: "Access 80+ curated AI tools for writing, visual generation, voiceover, editing, and content distribution automation.",
    accent: "#0891b2",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="14" width="32" height="22" rx="3" stroke="#0891b2" strokeWidth="1.5" opacity="0.5"/>
        <path d="M14 8 L14 14" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 8 L22 14" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 8 L30 14" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="12" y="29" fontSize="11" fill="#06b6d4" opacity="0.9" fontFamily="JetBrains Mono, monospace">AI</text>
      </svg>
    ),
  },
];

const resources = [
  { icon: "🎬", label: "Video Editing", count: "2,400+ assets" },
  { icon: "✍️", label: "Writing Templates", count: "860+ templates" },
  { icon: "🤖", label: "AI Prompts", count: "1,200+ prompts" },
  { icon: "🎨", label: "Design Assets", count: "3,100+ files" },
];

const communityPosts = [
  {
    user: "starlight.77",
    avatar: "https://images.unsplash.com/photo-1777927519810-5feb98777717?w=80&h=80&fit=crop&auto=format",
    content: "Finally finished the 30-day video challenge. My channel grew by 12K. This community changed everything.",
    likes: 128,
    replies: 24,
    time: "2h ago",
  },
  {
    user: "freebird.ink",
    avatar: "https://images.unsplash.com/photo-1770055447852-faa4d0ebfca0?w=80&h=80&fit=crop&auto=format",
    content: "The AI writing toolkit saved me 6 hours this week. Posted on 4 platforms simultaneously — unreal.",
    likes: 96,
    replies: 18,
    time: "4h ago",
  },
  {
    user: "cosmicframe_k",
    avatar: "https://images.unsplash.com/photo-1774689046306-f08a00221b6b?w=80&h=80&fit=crop&auto=format",
    content: "Using Nightingale's AI prompts to prep my next short film. The prompt library is genuinely incredible.",
    likes: 156,
    replies: 32,
    time: "6h ago",
  },
  {
    user: "night.chronicle",
    avatar: "https://images.unsplash.com/photo-1762274674115-a511e3d3c688?w=80&h=80&fit=crop&auto=format",
    content: "From zero to my first 100 paying fans in 2 months. The membership tools here make it effortless.",
    likes: 102,
    replies: 22,
    time: "8h ago",
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [activeResourceTab, setActiveResourceTab] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: "#000" }}>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden star-field pt-20">
        {/* Background nebula */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[600px] h-[600px] nebula-orb opacity-60" style={{ borderRadius: "50%", transform: "translate(20%, -20%)" }} />
          <div className="absolute right-10 top-10 w-[400px] h-[400px] nebula-orb opacity-40" style={{ borderRadius: "50%", transform: "translate(10%, -10%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-24">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono-label text-xs tracking-[0.25em] text-purple-400 uppercase">The Bird That Sings in the Dark</span>
              <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.6), transparent)" }} />
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-white mb-6" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "-0.01em" }}>
              Your Voice<br />
              <span className="gradient-text">Finds the World</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-md" style={{ fontFamily: "DM Sans, sans-serif" }}>
              In a noisy world, we help creators find their frequency. Build your universe. Share what matters. Connect with minds that understand.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Observe · Deconstruct · Rebuild"].map((t) => (
                <span key={t} className="text-sm text-purple-300/80 tracking-wide" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}>{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("membership")}
                className="px-8 py-3.5 text-white font-semibold rounded-md transition-all duration-200 hover:opacity-90 hover:scale-[1.02] glow-sm"
                style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
              >
                Begin Your Journey →
              </button>
              <button
                onClick={() => onNavigate("profile")}
                className="px-8 py-3.5 text-white/80 font-medium rounded-md border transition-all duration-200 hover:border-purple-500/60 hover:text-white"
                style={{ borderColor: "rgba(124,58,237,0.35)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
              >
                Explore Creators
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
              {[["48K+", "Active Creators"], ["2.1M", "Works Published"], ["190+", "Countries"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>{n}</div>
                  <div className="text-xs text-white/45 tracking-wider mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — nightingale illustration */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[440px]">
              <div className="absolute inset-0 nebula-orb opacity-80" style={{ borderRadius: "50%", filter: "blur(20px)" }} />
              <NightingaleSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE CREATORS ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-3">Featured Voices</span>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Explore Creators</h2>
            </div>
            <button
              onClick={() => onNavigate("profile")}
              className="hidden md:block text-sm text-purple-400 hover:text-purple-300 transition-colors tracking-wider"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {creators.map((c) => (
              <button
                key={c.handle}
                onClick={() => onNavigate("profile")}
                className="relative group text-left rounded-xl overflow-hidden card-hover border"
                style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.8)" }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "brightness(0.75) saturate(0.8)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-mono-label text-[10px] text-purple-400 tracking-widest uppercase">{c.tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>{c.name}</h3>
                  <p className="text-white/50 text-xs mt-0.5">{c.handle}</p>
                  <div className="flex gap-4 mt-3 pt-3" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
                    <span className="text-xs text-white/70"><span className="font-semibold text-white">{c.followers}</span> fans</span>
                    <span className="text-xs text-white/70"><span className="font-semibold text-white">{c.works}</span> works</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-3">What Nightingale Offers</span>
            <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Your Creative Infrastructure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.num}
                className="relative p-8 rounded-xl border card-hover overflow-hidden"
                style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.9)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${f.accent}, transparent)`, transform: "translate(30%, -30%)" }} />
                <div className="font-mono-label text-xs mb-5" style={{ color: f.accent, letterSpacing: "0.2em" }}>{f.num}</div>
                <div className="mb-5">{f.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>{f.title}</h3>
                <p className="text-xs tracking-widest mb-4" style={{ color: f.accent, fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.15em" }}>{f.subtitle}</p>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                <button className="mt-6 text-xs tracking-widest hover:opacity-80 transition-opacity" style={{ color: f.accent, fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.15em" }}>
                  Enter Space →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESOURCE CENTER ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] nebula-orb opacity-20 pointer-events-none" style={{ borderRadius: "50%", transform: "translateY(-50%)", filter: "blur(40px)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-3">Growth Arsenal</span>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Resource Center</h2>
            </div>
            <button
              onClick={() => onNavigate("resources")}
              className="hidden md:block text-sm text-purple-400 hover:text-purple-300 transition-colors tracking-wider"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}
            >
              Browse All →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {resources.map((r, i) => (
              <button
                key={r.label}
                onClick={() => { setActiveResourceTab(i); onNavigate("resources"); }}
                className="p-6 rounded-xl border text-left card-hover"
                style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.9)" }}
              >
                <span className="text-3xl block mb-4">{r.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>{r.label}</h3>
                <p className="font-mono-label text-xs text-purple-400">{r.count}</p>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate("resources")}
              className="text-sm text-white/50 hover:text-purple-400 transition-colors tracking-wider"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.12em" }}
            >
              Browse Full Resource Library →
            </button>
          </div>
        </div>
      </section>

      {/* ─── AI CREATIVE TOOLS ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-3">Powered by Intelligence</span>
              <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>AI Creative Tools<br /><span className="gradient-text">Amplify Your Vision</span></h2>
              <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
                From AI-assisted writing and image generation to automated publishing — our toolkit turns creative ideas into finished works at the speed of thought.
              </p>
              <div className="space-y-4">
                {[
                  { name: "Story Architect", desc: "AI narrative structure & plot engine" },
                  { name: "Visual Prompt Lab", desc: "Curated prompts for every major image AI" },
                  { name: "Auto Publisher", desc: "Schedule & distribute to 12 platforms simultaneously" },
                  { name: "Creator Analytics", desc: "Deep audience insights & growth forecasting" },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-start gap-4 p-4 rounded-lg border" style={{ borderColor: "rgba(124,58,237,0.15)", background: "rgba(7,4,14,0.7)" }}>
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#a855f7" }} />
                    <div>
                      <div className="text-white font-semibold text-sm" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.05em" }}>{tool.name}</div>
                      <div className="text-white/40 text-xs mt-0.5">{tool.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(124,58,237,0.25)" }}>
                <img
                  src="https://images.unsplash.com/photo-1781966995939-3748dc1f1742?w=700&h=500&fit=crop&auto=format"
                  alt="Creator workspace at night"
                  className="w-full h-80 object-cover"
                  style={{ filter: "brightness(0.6) saturate(0.7) hue-rotate(20deg)" }}
                />
                <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), transparent)" }} />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-lg border" style={{ background: "rgba(7,4,14,0.95)", borderColor: "rgba(168,85,247,0.4)" }}>
                <div className="font-mono-label text-xs text-purple-400">AI ASSISTS THIS WEEK</div>
                <div className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>14,280</div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-3 rounded-lg border" style={{ background: "rgba(7,4,14,0.95)", borderColor: "rgba(168,85,247,0.4)" }}>
                <div className="font-mono-label text-xs text-purple-400">TOOLS AVAILABLE</div>
                <div className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>80+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[500px] h-[500px] nebula-orb opacity-15 pointer-events-none" style={{ borderRadius: "50%", transform: "translateY(-50%)", filter: "blur(60px)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-3">Nightingale Galaxy</span>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Creator Community</h2>
              <p className="text-white/45 text-sm mt-2">Where every creator finds their own stage</p>
            </div>
            <button className="hidden md:block text-sm text-purple-400 hover:text-purple-300 transition-colors tracking-wider" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}>
              Join Community →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communityPosts.map((post) => (
              <div
                key={post.user}
                className="p-5 rounded-xl border card-hover"
                style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.9)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={post.avatar} alt={post.user} className="w-9 h-9 rounded-full object-cover" style={{ filter: "saturate(0.7)" }} />
                  <div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>{post.user}</div>
                    <div className="font-mono-label text-[10px] text-white/35">{post.time}</div>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-4">{post.content}</p>
                <div className="flex gap-4 text-xs text-white/40 font-mono-label">
                  <span>♡ {post.likes}</span>
                  <span>↩ {post.replies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl p-16 overflow-hidden border" style={{ borderColor: "rgba(124,58,237,0.35)", background: "rgba(7,4,14,0.95)" }}>
            <div className="absolute inset-0 nebula-orb opacity-30 pointer-events-none" style={{ borderRadius: "inherit" }} />
            <div className="relative">
              <span className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase block mb-4">Choose Your Path</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                Ready to Find<br /><span className="gradient-text">Your Voice?</span>
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto mb-10">Start free, grow unlimited. Join 48,000 creators already building their universe on Nightingale.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate("membership")}
                  className="px-10 py-4 text-white font-semibold rounded-md transition-all duration-200 hover:opacity-90 glow-md"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em", fontSize: "1.05rem" }}
                >
                  Start Free Today
                </button>
                <button
                  onClick={() => onNavigate("membership")}
                  className="px-10 py-4 text-white/70 font-medium rounded-md border hover:border-purple-500/50 hover:text-white transition-all duration-200"
                  style={{ borderColor: "rgba(124,58,237,0.3)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em", fontSize: "1.05rem" }}
                >
                  See Membership Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 py-12 border-t" style={{ borderColor: "rgba(124,58,237,0.15)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-bold text-white text-lg tracking-widest mb-1" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.15em" }}>NIGHTINGALE WORLD</div>
            <p className="text-white/30 text-xs font-mono-label">The bird that sings in the dark</p>
            <p className="text-white/20 text-xs mt-4">© 2026 Nightingale World. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-2 text-sm text-white/40">
            {["Platform", "Creators", "Resources", "Membership", "Community", "About", "Privacy", "Terms", "Contact"].map((l) => (
              <span key={l} className="hover:text-white/70 cursor-pointer transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
