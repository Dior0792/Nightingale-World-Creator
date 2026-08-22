import { useState } from "react";

const HERO_IMG = "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?w=1400&h=500&fit=crop&auto=format";
const AVATAR_IMG = "https://images.unsplash.com/photo-1777927519810-5feb98777717?w=300&h=300&fit=crop&auto=format";

const galleryItems = [
  { id: 1, type: "photo", title: "Eclipse Protocol", img: "https://images.unsplash.com/photo-1677029907981-e9a44fb7409a?w=600&h=400&fit=crop&auto=format", likes: 2841, category: "Photography" },
  { id: 2, type: "video", title: "Neon Solitude", img: "https://images.unsplash.com/photo-1619850015633-5cb0c02b1eb5?w=600&h=400&fit=crop&auto=format", likes: 5210, category: "Film" },
  { id: 3, type: "photo", title: "Galaxy Drift", img: "https://images.unsplash.com/photo-1502679726485-931beda67f88?w=600&h=400&fit=crop&auto=format", likes: 3940, category: "Photography" },
  { id: 4, type: "video", title: "Midnight Circuit", img: "https://images.unsplash.com/photo-1781966995939-3748dc1f1742?w=600&h=400&fit=crop&auto=format", likes: 4120, category: "Film" },
  { id: 5, type: "photo", title: "The Void Speaks", img: "https://images.unsplash.com/photo-1751200065687-a126e7c304da?w=600&h=400&fit=crop&auto=format", likes: 1980, category: "Art" },
  { id: 6, type: "photo", title: "Purple Hours", img: "https://images.unsplash.com/photo-1758872014929-174e4ccdf01f?w=600&h=400&fit=crop&auto=format", likes: 2550, category: "Photography" },
];

const articles = [
  { title: "How I Built an Audience of 80K Without Posting Every Day", date: "Aug 14, 2026", readTime: "8 min", views: "14.2K", tag: "Strategy" },
  { title: "The Psychology of a Viral Visual: What Actually Works in 2026", date: "Aug 3, 2026", readTime: "12 min", views: "22.7K", tag: "Craft" },
  { title: "My Full AI Toolkit for Visual Storytelling", date: "Jul 28, 2026", readTime: "6 min", views: "9.4K", tag: "Tools" },
  { title: "Night Shooting: A Complete Field Guide for Cinematic Creators", date: "Jul 12, 2026", readTime: "15 min", views: "18.1K", tag: "Tutorial" },
];

const updates = [
  { text: "Just dropped the final cut of 'Eclipse Protocol'. 72 hours of editing. Worth every minute.", time: "2 days ago", likes: 847 },
  { text: "The AI prompt set I use for generating cinematic scene concepts — sharing it in the Resource Library this Friday. Stay tuned.", time: "5 days ago", likes: 1203 },
  { text: "Crossed 80K on Nightingale. Thank you. This community is unlike anything I've ever been part of.", time: "1 week ago", likes: 2190 },
];

const tabs = ["Gallery", "Videos", "Articles", "Community", "Updates"];

export default function CreatorProfilePage() {
  const [activeTab, setActiveTab] = useState("Gallery");
  const [following, setFollowing] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#000" }}>
      {/* Hero banner */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="Creator banner" className="w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8) hue-rotate(15deg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, #000 100%)" }} />
        <div className="absolute inset-0 star-field opacity-40" />
      </div>

      {/* Profile section */}
      <div className="max-w-6xl mx-auto px-6 relative -mt-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
          {/* Avatar */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
            <div className="absolute inset-0 rounded-full glow-md" style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", padding: "2px" }}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={AVATAR_IMG} alt="Aurora Chen" className="w-full h-full object-cover" style={{ filter: "saturate(0.85)" }} />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-mono-label text-xs text-purple-400 tracking-[0.2em] uppercase mb-1">Visual Storyteller</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Aurora Chen</h1>
                <p className="text-white/45 text-sm mt-1">@auroravisuals · Joined January 2024</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setFollowing(!following)}
                  className="px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-200"
                  style={{
                    background: following ? "transparent" : "linear-gradient(135deg, #7c3aed, #a855f7)",
                    color: following ? "rgba(255,255,255,0.7)" : "white",
                    border: following ? "1px solid rgba(124,58,237,0.4)" : "none",
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  {following ? "Following ✓" : "Follow"}
                </button>
                <button className="px-4 py-2.5 text-sm rounded-md border text-white/60 hover:text-white transition-colors" style={{ borderColor: "rgba(124,58,237,0.25)", fontFamily: "Rajdhani, sans-serif" }}>
                  Message
                </button>
              </div>
            </div>

            {/* Bio */}
            <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-2xl">
              I make films about the spaces between things — light, silence, time. Based in Tokyo · Berlin. Published works in 24 countries. Film · Photography · Narrative essays on the creative process.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-5">
              {[["84.2K", "Followers"], ["312", "Works"], ["2.1M", "Total Views"], ["48", "Countries"]].map(([n, l]) => (
                <div key={l}>
                  <span className="text-xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>{n}</span>
                  <span className="text-white/35 text-xs ml-1.5">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Film", "Photography", "Night Shooting", "AI Tools", "Visual Essays", "Tokyo"].map((t) => (
            <span key={t} className="px-3 py-1 text-xs rounded-full border font-mono-label text-purple-400" style={{ borderColor: "rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.07)" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex gap-0 mb-10 border-b" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-3 text-sm transition-all duration-200 relative"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.1em",
                color: activeTab === tab ? "white" : "rgba(255,255,255,0.35)",
              }}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }} />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {(activeTab === "Gallery" || activeTab === "Videos") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems
              .filter((g) => activeTab === "Gallery" || g.type === "video")
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-xl overflow-hidden card-hover cursor-pointer border"
                  style={{ borderColor: "rgba(124,58,237,0.15)" }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: "brightness(0.75) saturate(0.8)" }} />
                  </div>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 55%)" }} />
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.8)" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><polygon points="2,1 9,5 2,9"/></svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-mono-label text-[10px] text-purple-400 uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-white font-semibold mt-0.5 text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{item.title}</h3>
                    <span className="font-mono-label text-[10px] text-white/40 mt-1 block">♡ {item.likes.toLocaleString()}</span>
                  </div>
                </div>
              ))}
          </div>
        )}

        {activeTab === "Articles" && (
          <div className="space-y-4 max-w-3xl">
            {articles.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-xl border card-hover cursor-pointer"
                style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.8)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-mono-label text-[10px] text-purple-400 uppercase tracking-widest">{a.tag}</span>
                    <h3 className="text-white text-lg font-semibold mt-1 leading-snug" style={{ fontFamily: "Rajdhani, sans-serif" }}>{a.title}</h3>
                    <div className="flex gap-4 mt-3 text-xs text-white/35 font-mono-label">
                      <span>{a.date}</span>
                      <span>{a.readTime} read</span>
                      <span>{a.views} views</span>
                    </div>
                  </div>
                  <span className="text-white/20 text-2xl mt-1">→</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Community" && (
          <div className="max-w-2xl">
            <div className="p-5 rounded-xl border mb-6" style={{ borderColor: "rgba(124,58,237,0.25)", background: "rgba(7,4,14,0.8)" }}>
              <textarea
                className="w-full bg-transparent text-white/70 text-sm resize-none outline-none placeholder-white/20"
                placeholder="Share something with Aurora's community..."
                rows={3}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              />
              <div className="flex justify-end mt-3">
                <button className="px-5 py-2 text-sm rounded-md text-white" style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.1em" }}>
                  Post
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { user: "nova.frames", msg: "Your night shooting guide changed the way I work. Thank you for this.", likes: 84 },
                { user: "inkwell.dv", msg: "The 'Neon Solitude' short is still in my head a week later. Art.", likes: 147 },
                { user: "pulse_creative", msg: "Would love to see a breakdown of your editing workflow!", likes: 63 },
              ].map((c) => (
                <div key={c.user} className="p-5 rounded-xl border" style={{ borderColor: "rgba(124,58,237,0.15)", background: "rgba(7,4,14,0.7)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", fontFamily: "Rajdhani, sans-serif" }}>
                      {c.user[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "Rajdhani, sans-serif" }}>@{c.user}</span>
                  </div>
                  <p className="text-white/55 text-sm">{c.msg}</p>
                  <span className="text-xs text-white/25 font-mono-label mt-2 block">♡ {c.likes}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Updates" && (
          <div className="max-w-2xl space-y-5">
            {updates.map((u, i) => (
              <div key={i} className="p-6 rounded-xl border" style={{ borderColor: "rgba(124,58,237,0.2)", background: "rgba(7,4,14,0.8)" }}>
                <div className="flex items-start gap-4">
                  <img src={AVATAR_IMG} alt="Aurora" className="w-9 h-9 rounded-full object-cover flex-shrink-0" style={{ filter: "saturate(0.75)" }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Aurora Chen</span>
                      <span className="font-mono-label text-[10px] text-white/30">{u.time}</span>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">{u.text}</p>
                    <div className="flex gap-4 mt-3 text-xs text-white/35 font-mono-label">
                      <button className="hover:text-purple-400 transition-colors">♡ {u.likes.toLocaleString()}</button>
                      <button className="hover:text-purple-400 transition-colors">↩ Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
