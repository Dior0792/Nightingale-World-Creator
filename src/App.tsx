import { useState } from "react";
import heroBg from "@/imports/_____20260820165134_49_153.jpg";

/* ─── tiny reusable pieces ─── */

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" stroke="rgba(168,85,247,0.5)" strokeWidth="1.2"/>
      {/* wing/bird mark */}
      <path d="M7 19 C7 19, 9 15.5, 12.5 13.5 C10.5 11.5, 9.5 8.5, 11.5 6.5 C13.5 4.5, 16 5.5, 17 7.5 C18 9.5, 16.5 11.5, 14.5 12.5 C17.5 12.5, 20.5 11.5, 22 14 C20 13.5, 17.5 14.5, 16 16 C18 16.5, 20.5 18, 20 20 C18 19, 16 18, 14 18.5 C12 19, 9 21, 7 19Z"
        fill="#a855f7" opacity="0.95"/>
      <circle cx="17" cy="7.5" r="0.9" fill="white" opacity="0.85"/>
    </svg>
    <div className="leading-none">
      <div className="text-white font-bold tracking-[0.14em] text-sm" style={{ fontFamily: "Rajdhani,sans-serif" }}>NIGHTINGALE</div>
      <div className="text-purple-400 tracking-[0.28em] text-[9px] font-mono-label">WORLD</div>
    </div>
  </div>
);

/* ─── nav ─── */
function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const links = ["Platform", "Creators", "Resources", "Membership"];
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(0,0,0,0.88)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href="#" className="text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.1em" }}>{l}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/55 hover:text-white transition-colors px-3 py-1.5" style={{ fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.08em" }}>Sign In</a>
          <a href="#membership" className="px-5 py-2 text-sm font-semibold text-white rounded transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.08em" }}>
            Join Free
          </a>
        </div>
        {/* hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)}>
          <span className={`block h-px w-5 bg-white/70 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block h-px w-5 bg-white/70 transition-all ${open ? "opacity-0" : ""}`}/>
          <span className={`block h-px w-5 bg-white/70 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 border-t border-white/10" style={{ background: "rgba(0,0,0,0.97)" }}>
          {links.map(l => <a key={l} href="#" className="block text-white/70 text-base" style={{ fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.1em" }}>{l}</a>)}
          <a href="#membership" className="block mt-3 px-5 py-2.5 text-center text-white rounded font-semibold"
            style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", fontFamily: "Rajdhani,sans-serif" }}>Join Free</a>
        </div>
      )}
    </header>
  );
}

/* ─── main ─── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [billingAnnual, setBillingAnnual] = useState(false);

  /* scroll listener */
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled((e.target as HTMLDivElement).scrollTop > 40);
  };

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden" style={{ background: "#000" }} onScroll={handleScroll}>
      <Nav scrolled={scrolled} />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* uploaded reference photo as full-bleed bg */}
        <img
          src={heroBg}
          alt="Nightingale World — a bird silhouetted against a glowing purple moon"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.72) saturate(1.1)" }}
        />
        {/* gradient overlay: left reads text, right reveals the bird */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.1) 100%)" }}/>
        {/* subtle star scatter */}
        <div className="absolute inset-0 star-field opacity-40 pointer-events-none"/>

        <div className="relative max-w-7xl mx-auto px-6 py-40 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-px" style={{ background: "#a855f7" }}/>
              <span className="font-mono-label text-[10px] tracking-[0.3em] text-purple-400 uppercase">The Bird That Sings in the Dark</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.88] text-white mb-5"
              style={{ fontFamily: "Rajdhani,sans-serif", letterSpacing: "-0.01em" }}>
              Your Voice<br />
              <span className="gradient-text text-glow">Finds the World</span>
            </h1>

            <p className="text-base text-white/55 leading-relaxed mb-3 max-w-sm">
              Observe · Deconstruct · Rebuild
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-10 max-w-sm">
              In a complex world, find the angles others miss. Help ideas that can't speak for themselves find their voice.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#creators"
                className="flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded transition-all hover:opacity-90 hover:scale-[1.02] glow-sm"
                style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.1em" }}>
                Begin Exploring →
              </a>
              <a href="#about"
                className="px-8 py-3.5 text-white/70 font-medium rounded border hover:border-purple-500/50 hover:text-white transition-all"
                style={{ borderColor: "rgba(124,58,237,0.35)", fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.1em" }}>
                About Nightingale
              </a>
            </div>

            {/* metrics strip */}
            <div className="flex gap-8 mt-14 pt-6" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
              {[["48K+","Active Creators"],["2.1M","Works Published"],["190+","Countries"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Rajdhani,sans-serif" }}>{n}</div>
                  <div className="text-[11px] text-white/35 tracking-wide mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom fade into black */}
        <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(0deg, #000 0%, transparent 100%)" }}/>
      </section>

      {/* ══════════════════════════════════════════
          CREATOR COMMUNITY
      ══════════════════════════════════════════ */}
      <section id="creators" className="py-28 px-6 relative">
        {/* faint nebula glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] nebula-orb opacity-15 pointer-events-none" style={{ filter: "blur(60px)" }}/>

        <div className="max-w-7xl mx-auto relative">
          {/* section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-mono-label text-[10px] tracking-[0.25em] text-purple-400 uppercase block mb-3">Featured Voices</span>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani,sans-serif" }}>Creator Community</h2>
              <p className="text-white/40 text-sm mt-2 max-w-md">Every creator has a stage here. Every audience finds a voice worth following.</p>
            </div>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors whitespace-nowrap"
              style={{ fontFamily: "Rajdhani,sans-serif", letterSpacing: "0.1em" }}>Explore All Creators →</a>
          </div>

          {/* creator cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name:"Aurora Chen",   handle:"@auroravisuals", role:"Visual Storyteller", fans:"84.2K", works:312, tag:"Film · Photography",
                img:"https://images.unsplash.com/photo-1777927519810-5feb98777717?w=400&h=520&fit=crop&auto=format" },
              { name:"Marcus Vale",   handle:"@marcusvale",    role:"Sound & Score",      fans:"61.7K", works:208, tag:"Music · Podcast",
                img:"https://images.unsplash.com/photo-1770055447852-faa4d0ebfca0?w=400&h=520&fit=crop&auto=format" },
              { name:"Yuki Tanaka",   handle:"@yukistudio",    role:"Digital Illustrator",fans:"127K",  works:541, tag:"Art · Design",
                img:"https://images.unsplash.com/photo-1774689046306-f08a00221b6b?w=400&h=520&fit=crop&auto=format" },
              { name:"Leon Dross",    handle:"@leondross",     role:"Cinematic Director", fans:"93.1K", works:178, tag:"Video · Film",
                img:"https://images.unsplash.com/photo-1763510386202-0a18d30642f8?w=400&h=520&fit=crop&auto=format" },
            ].map(c => (
              <div key={c.handle}
                className="group relative rounded-xl overflow-hidden card-hover border cursor-pointer"
                style={{ borderColor:"rgba(124,58,237,0.18)", background:"rgba(7,4,14,0.8)" }}>
                <div className="aspect-[3/4] overflow-hidden bg-purple-950/20">
                  <img src={c.img} alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter:"brightness(0.72) saturate(0.85)" }}/>
                </div>
                <div className="absolute inset-0"
                  style={{ background:"linear-gradient(0deg,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.18) 55%,transparent 100%)" }}/>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-mono-label text-[9px] text-purple-400 tracking-widest uppercase">{c.tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily:"Rajdhani,sans-serif" }}>{c.name}</h3>
                  <p className="text-white/40 text-[11px] mt-0.5">{c.handle} · {c.role}</p>
                  <div className="flex gap-4 mt-3 pt-3" style={{ borderTop:"1px solid rgba(124,58,237,0.18)" }}>
                    <span className="text-[11px] text-white/55"><span className="font-semibold text-white">{c.fans}</span> fans</span>
                    <span className="text-[11px] text-white/55"><span className="font-semibold text-white">{c.works}</span> works</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* community posts strip */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { user:"starlight.77", time:"2h ago", msg:"Finally finished the 30-day video challenge. Channel grew 12K. This community changed everything.", likes:128, replies:24,
                av:"https://images.unsplash.com/photo-1777927519810-5feb98777717?w=80&h=80&fit=crop&auto=format" },
              { user:"freebird.ink",  time:"4h ago", msg:"The AI writing toolkit saved me 6 hours this week. Posted on 4 platforms simultaneously — unreal.", likes:96, replies:18,
                av:"https://images.unsplash.com/photo-1770055447852-faa4d0ebfca0?w=80&h=80&fit=crop&auto=format" },
              { user:"cosmicframe_k", time:"6h ago", msg:"Using Nightingale's AI prompt library to prep my next short film. Genuinely incredible depth.", likes:156, replies:32,
                av:"https://images.unsplash.com/photo-1774689046306-f08a00221b6b?w=80&h=80&fit=crop&auto=format" },
              { user:"night.chron",  time:"8h ago", msg:"From zero to first 100 paying fans in 2 months. The membership tools here make it feel effortless.", likes:102, replies:22,
                av:"https://images.unsplash.com/photo-1762274674115-a511e3d3c688?w=80&h=80&fit=crop&auto=format" },
            ].map(p => (
              <div key={p.user} className="p-5 rounded-xl border card-hover"
                style={{ borderColor:"rgba(124,58,237,0.18)", background:"rgba(7,4,14,0.85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <img src={p.av} alt={p.user} className="w-8 h-8 rounded-full object-cover" style={{ filter:"saturate(0.7)" }}/>
                  <div>
                    <div className="text-xs font-semibold text-white" style={{ fontFamily:"Rajdhani,sans-serif" }}>@{p.user}</div>
                    <div className="font-mono-label text-[9px] text-white/30">{p.time}</div>
                  </div>
                </div>
                <p className="text-white/55 text-xs leading-relaxed mb-3">{p.msg}</p>
                <div className="flex gap-4 font-mono-label text-[10px] text-white/30">
                  <span>♡ {p.likes}</span><span>↩ {p.replies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESOURCE LIBRARY
      ══════════════════════════════════════════ */}
      <section id="resources" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] nebula-orb opacity-18 pointer-events-none" style={{ filter:"blur(55px)" }}/>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="font-mono-label text-[10px] tracking-[0.25em] text-purple-400 uppercase block mb-3">Growth Arsenal</span>
            <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily:"Rajdhani,sans-serif" }}>Resource Library</h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">Every asset, template, and reference a creator needs — curated, searchable, always growing.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { emoji:"🎬", label:"Video Editing",    count:"2,400+ assets",   sub:"LUTs · Transitions · SFX · Templates" },
              { emoji:"✍️", label:"Writing Templates",count:"860+ templates",  sub:"Essays · Scripts · Newsletters · Threads" },
              { emoji:"🤖", label:"AI Prompts",       count:"1,200+ prompts",  sub:"Image · Video · Copy · Strategy" },
              { emoji:"🎨", label:"Design Assets",    count:"3,100+ files",    sub:"Icons · Mockups · Fonts · UI Kits" },
            ].map(r => (
              <div key={r.label}
                className="p-6 rounded-xl border card-hover cursor-pointer group"
                style={{ borderColor:"rgba(124,58,237,0.18)", background:"rgba(7,4,14,0.85)" }}>
                <span className="text-3xl block mb-5">{r.emoji}</span>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors" style={{ fontFamily:"Rajdhani,sans-serif" }}>{r.label}</h3>
                <p className="font-mono-label text-[10px] text-purple-400 mb-2">{r.count}</p>
                <p className="text-[11px] text-white/30 leading-relaxed">{r.sub}</p>
              </div>
            ))}
          </div>

          {/* download center banner */}
          <div className="mt-5 p-8 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderColor:"rgba(124,58,237,0.25)", background:"rgba(7,4,14,0.9)" }}>
            <div>
              <span className="font-mono-label text-[10px] text-purple-400 tracking-[0.2em] uppercase">Download Center</span>
              <h3 className="text-2xl font-bold text-white mt-1" style={{ fontFamily:"Rajdhani,sans-serif" }}>
                Everything in one place. Download instantly.
              </h3>
              <p className="text-white/40 text-sm mt-1">Members unlock unlimited downloads across all categories.</p>
            </div>
            <a href="#membership"
              className="flex-shrink-0 px-7 py-3 text-white font-semibold rounded transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background:"linear-gradient(135deg,#7c3aed,#a855f7)", fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.08em" }}>
              Browse Library →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI CREATIVE TOOLS
      ══════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* left: text */}
            <div>
              <span className="font-mono-label text-[10px] tracking-[0.25em] text-purple-400 uppercase block mb-4">Powered by Intelligence</span>
              <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily:"Rajdhani,sans-serif" }}>
                AI Creative Tools<br/>
                <span className="gradient-text">Amplify Your Vision</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md">
                From AI-assisted writing and image generation to automated multi-platform publishing — our toolkit turns raw creative instinct into finished, distributed work at the speed of thought.
              </p>
              <div className="space-y-3">
                {[
                  { name:"Story Architect",    desc:"AI narrative structure, plot, and tone engine" },
                  { name:"Visual Prompt Lab",  desc:"1,200+ curated prompts for every major image AI" },
                  { name:"Auto Publisher",     desc:"Schedule & distribute to 12 platforms simultaneously" },
                  { name:"Creator Analytics",  desc:"Deep audience insights and growth forecasting" },
                  { name:"Voice Cloner",       desc:"Studio-quality AI voiceover in your own voice" },
                ].map(t => (
                  <div key={t.name}
                    className="flex items-start gap-4 p-4 rounded-lg border"
                    style={{ borderColor:"rgba(124,58,237,0.15)", background:"rgba(7,4,14,0.75)" }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background:"#a855f7" }}/>
                    <div>
                      <div className="text-sm font-semibold text-white" style={{ fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.05em" }}>{t.name}</div>
                      <div className="text-[11px] text-white/35 mt-0.5">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: dark workspace visual */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden border bg-purple-950/10"
                style={{ borderColor:"rgba(124,58,237,0.22)" }}>
                <img
                  src="https://images.unsplash.com/photo-1781966995939-3748dc1f1742?w=720&h=480&fit=crop&auto=format"
                  alt="Dark creator workspace at night"
                  className="w-full h-72 object-cover"
                  style={{ filter:"brightness(0.55) saturate(0.75) hue-rotate(20deg)" }}
                />
                <div className="absolute inset-0 rounded-xl"
                  style={{ background:"linear-gradient(135deg,rgba(124,58,237,0.12),transparent 60%)" }}/>
              </div>
              {/* floating stat cards */}
              <div className="absolute -bottom-5 -left-5 px-5 py-3.5 rounded-xl border"
                style={{ background:"rgba(5,2,12,0.97)", borderColor:"rgba(168,85,247,0.4)" }}>
                <div className="font-mono-label text-[9px] text-purple-400 tracking-widest">AI ASSISTS · THIS WEEK</div>
                <div className="text-3xl font-bold text-white mt-1" style={{ fontFamily:"Rajdhani,sans-serif" }}>14,280</div>
              </div>
              <div className="absolute -top-5 -right-5 px-5 py-3.5 rounded-xl border"
                style={{ background:"rgba(5,2,12,0.97)", borderColor:"rgba(168,85,247,0.4)" }}>
                <div className="font-mono-label text-[9px] text-purple-400 tracking-widest">TOOLS AVAILABLE</div>
                <div className="text-3xl font-bold text-white mt-1" style={{ fontFamily:"Rajdhani,sans-serif" }}>80+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORM FEATURES (brief card row)
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num:"01", accent:"#7c3aed", title:"Creator Universe",       sub:"Your own digital space",         desc:"A fully branded profile, curated work galleries, and a creative identity that spans every medium." },
              { num:"02", accent:"#d97706", title:"Creative Training Camp",  sub:"Write · Film · Publish",         desc:"Daily AI-powered prompts, short-film challenges, and multi-platform distribution tools." },
              { num:"03", accent:"#0891b2", title:"AI Toolkit",              sub:"Tool · Prompt · Automate",       desc:"80+ curated AI tools for writing, visuals, voiceover, editing, and distribution automation." },
            ].map(f => (
              <div key={f.num} className="relative p-8 rounded-xl border card-hover overflow-hidden"
                style={{ borderColor:"rgba(124,58,237,0.18)", background:"rgba(7,4,14,0.9)" }}>
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10 pointer-events-none"
                  style={{ background:`radial-gradient(circle,${f.accent},transparent)`, transform:"translate(30%,-30%)" }}/>
                <div className="font-mono-label text-xs mb-5" style={{ color:f.accent, letterSpacing:"0.2em" }}>{f.num}</div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily:"Rajdhani,sans-serif" }}>{f.title}</h3>
                <p className="text-xs tracking-widest mb-4" style={{ color:f.accent, fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.15em" }}>{f.sub}</p>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                <button className="mt-6 text-xs tracking-widest hover:opacity-70 transition-opacity"
                  style={{ color:f.accent, fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.15em" }}>
                  Enter Space →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEMBERSHIP
      ══════════════════════════════════════════ */}
      <section id="membership" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-25 pointer-events-none"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] nebula-orb opacity-12 pointer-events-none" style={{ filter:"blur(80px)" }}/>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="font-mono-label text-[10px] tracking-[0.25em] text-purple-400 uppercase block mb-3">Choose Your Path</span>
            <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily:"Rajdhani,sans-serif" }}>Membership Plans</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-8">Start free, grow unlimited. Upgrade when you're ready to go further.</p>

            {/* billing toggle */}
            <div className="inline-flex items-center gap-3 p-1 rounded-full border"
              style={{ borderColor:"rgba(124,58,237,0.25)", background:"rgba(7,4,14,0.8)" }}>
              <button onClick={() => setBillingAnnual(false)}
                className="px-5 py-1.5 rounded-full text-sm transition-all"
                style={{ background: !billingAnnual ? "linear-gradient(135deg,#7c3aed,#a855f7)" : "transparent",
                  color: !billingAnnual ? "white" : "rgba(255,255,255,0.45)",
                  fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.08em" }}>
                Monthly
              </button>
              <button onClick={() => setBillingAnnual(true)}
                className="px-5 py-1.5 rounded-full text-sm transition-all"
                style={{ background: billingAnnual ? "linear-gradient(135deg,#7c3aed,#a855f7)" : "transparent",
                  color: billingAnnual ? "white" : "rgba(255,255,255,0.45)",
                  fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.08em" }}>
                Annual <span className="text-[10px] text-yellow-400 ml-1">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name:"Free",
                price:"$0",
                period:"/forever",
                badge:null,
                desc:"Everything you need to start building your creator presence.",
                features:["Public creator profile","Up to 20 works in gallery","Basic AI writing prompts","Community access","Nightingale badge"],
                cta:"Get Started Free",
                style:{ borderColor:"rgba(124,58,237,0.2)", background:"rgba(7,4,14,0.85)" },
                ctaStyle:{ border:"1px solid rgba(124,58,237,0.35)", background:"transparent", color:"rgba(255,255,255,0.7)" },
              },
              {
                name:"Creator",
                price: billingAnnual ? "$79" : "$99",
                period:"/month",
                badge:"Most Popular",
                desc:"The full toolkit for creators ready to grow a real audience.",
                features:["Unlimited gallery & works","AI creative assistant","1,200+ prompts library","Full resource downloads","Personal analytics","Custom profile domain"],
                cta:"Start Creator Plan",
                style:{ borderColor:"rgba(168,85,247,0.55)", background:"rgba(10,5,20,0.95)", boxShadow:"0 0 60px rgba(124,58,237,0.22)" },
                ctaStyle:{ background:"linear-gradient(135deg,#7c3aed,#a855f7)", color:"white" },
              },
              {
                name:"Premium",
                price: billingAnnual ? "$1,599" : "$1,999",
                period:"/year",
                badge:null,
                desc:"White-glove creative partnership for serious professionals.",
                features:["Everything in Creator","1-on-1 strategy sessions","Personal brand consulting","Content roadmap design","Priority AI queue","Revenue optimization"],
                cta:"Learn More",
                style:{ borderColor:"rgba(124,58,237,0.2)", background:"rgba(7,4,14,0.85)" },
                ctaStyle:{ border:"1px solid rgba(124,58,237,0.35)", background:"transparent", color:"rgba(255,255,255,0.7)" },
              },
            ].map(plan => (
              <div key={plan.name} className="relative rounded-xl p-8 border flex flex-col card-hover"
                style={plan.style}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold text-white tracking-widest"
                    style={{ background:"linear-gradient(135deg,#7c3aed,#a855f7)", fontFamily:"Rajdhani,sans-serif" }}>
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <div className="font-mono-label text-[10px] text-purple-400 tracking-[0.25em] uppercase mb-2">{plan.name}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-white" style={{ fontFamily:"Rajdhani,sans-serif" }}>{plan.price}</span>
                    <span className="text-sm text-white/35 mb-1">{plan.period}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{plan.desc}</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-white/60">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
                  style={{ fontFamily:"Rajdhani,sans-serif", letterSpacing:"0.08em", ...plan.ctaStyle }}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="px-6 py-14 border-t" style={{ borderColor:"rgba(124,58,237,0.14)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* brand */}
            <div className="col-span-2">
              <Logo />
              <p className="text-white/30 text-xs leading-relaxed mt-4 max-w-xs">
                The bird that sings in the dark. A global platform for creators who think independently, create fearlessly, and speak for those who can't find the words.
              </p>
              <div className="flex gap-4 mt-5">
                {["𝕏","IG","YT","TT"].map(s => (
                  <button key={s} className="w-8 h-8 rounded-full border flex items-center justify-center font-mono-label text-[10px] text-white/40 hover:text-white hover:border-purple-500/50 transition-all"
                    style={{ borderColor:"rgba(124,58,237,0.2)" }}>{s}</button>
                ))}
              </div>
            </div>
            {/* link columns */}
            {[
              { head:"Platform",  links:["Creator Profiles","Works Gallery","AI Tools","Analytics","Mobile App"] },
              { head:"Resources", links:["Video Editing","Writing Templates","AI Prompts","Design Assets","Download Center"] },
              { head:"Company",   links:["About Us","Blog","Careers","Press Kit","Contact"] },
            ].map(col => (
              <div key={col.head}>
                <div className="font-mono-label text-[10px] text-purple-400 tracking-[0.2em] uppercase mb-4">{col.head}</div>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-xs text-white/35 hover:text-white/70 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
            style={{ borderTop:"1px solid rgba(124,58,237,0.12)" }}>
            <p className="font-mono-label text-[10px] text-white/20">© 2026 Nightingale World. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy","Terms of Service","Cookie Settings"].map(l => (
                <a key={l} href="#" className="font-mono-label text-[10px] text-white/20 hover:text-white/50 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
