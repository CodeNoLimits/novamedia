"use client";

import { useState, useRef, useEffect, type RefObject } from "react";
import { translations, PLANS, VOICE_PLANS, WEB_PLANS, PORTFOLIO, WEBSITES, currencySymbol, defaultCurrency, type Lang, type Currency, type ServiceTab } from "./i18n";

// Intersection Observer hook for scroll animations
function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [cur, setCur] = useState<Currency>("eur");
  const [svcTab, setSvcTab] = useState<ServiceTab>("video");
  const t = translations[lang];
  const isRTL = lang === "he";
  const sym = currencySymbol[cur];

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const switchLang = (l: Lang) => {
    setLang(l);
    setCur(defaultCurrency[l]);
  };

  const wa = (msg?: string) => {
    const text = msg || "Bonjour, je souhaite découvrir NovaMedia Studio";
    window.open(`https://wa.me/972585148500?text=${encodeURIComponent(text)}`, "_blank");
  };

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "he", label: "עב" },
  ];

  const curs: { code: Currency; label: string }[] = [
    { code: "eur", label: "€" },
    { code: "usd", label: "$" },
    { code: "ils", label: "₪" },
  ];

  const planKeys = ["trial", "smallbiz", "growth", "scale", "enterprise"] as const;
  const planMeta: Record<string, { badge: string | null; highlight: boolean; isTrial: boolean; isEnt: boolean }> = {
    trial: { badge: null, highlight: false, isTrial: true, isEnt: false },
    smallbiz: { badge: null, highlight: false, isTrial: false, isEnt: false },
    growth: { badge: t.pricing.popular, highlight: true, isTrial: false, isEnt: false },
    scale: { badge: t.pricing.bestValue, highlight: false, isTrial: false, isEnt: false },
    enterprise: { badge: null, highlight: false, isTrial: false, isEnt: true },
  };

  return (
    <main dir={isRTL ? "rtl" : "ltr"} style={{ background: "#0A0A0A", minHeight: "100vh", color: "#fff", fontFamily: isRTL ? "'Segoe UI', Arial, sans-serif" : "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 28px", background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,175,55,0.06)" }}>
        <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="gradient-gold-animated">Nova</span><span>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 9, marginLeft: 5, opacity: 0.4, fontWeight: 500 }}>STUDIO</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 2, background: "#111", borderRadius: 6, padding: 2 }}>
            {langs.map((l) => (
              <button key={l.code} onClick={() => switchLang(l.code)}
                style={{ background: lang === l.code ? "linear-gradient(135deg,#D4AF37,#F5D76E)" : "transparent", color: lang === l.code ? "#0A0A0A" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: "4px 10px", borderRadius: 4, fontSize: 11, fontWeight: 700, transition: "all 0.2s" }}>
                {l.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 1, background: "#111", borderRadius: 6, padding: 2 }}>
            {curs.map((c) => (
              <button key={c.code} onClick={() => setCur(c.code)}
                style={{ background: cur === c.code ? "rgba(212,175,55,0.15)" : "transparent", color: cur === c.code ? "#D4AF37" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", padding: "4px 9px", borderRadius: 4, fontSize: 11, fontWeight: 700, transition: "all 0.2s" }}>
                {c.label}
              </button>
            ))}
          </div>
          <button className="btn-gold" style={{ padding: "8px 18px", fontSize: 12 }} onClick={() => wa()}>{t.nav.cta}</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", paddingTop: 140, paddingBottom: 60, textAlign: "center", padding: "140px 20px 60px", maxWidth: 820, margin: "0 auto" }}>
        <div className="hero-glow" />
        {/* Particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ top: `${20 + i * 12}%`, left: `${10 + i * 15}%`, animationDelay: `${i * 1.3}s`, animationDuration: `${6 + i * 2}s` }} />
        ))}

        <div className="animate-fade-up">
          <div className="tag" style={{ marginBottom: 20 }}>{t.hero.badge}</div>
        </div>
        <h1 className="animate-fade-up delay-1" style={{ fontSize: "clamp(34px, 6vw, 66px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20, position: "relative" }}>
          {t.hero.title1} <span className="gradient-gold-animated">{t.hero.title2}</span>
        </h1>
        <p className="animate-fade-up delay-2" style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
          {t.hero.sub}
        </p>
        <div className="animate-fade-up delay-3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold pulse-ring" onClick={() => wa(`Bonjour, je veux tester 1 vidéo NovaMedia (${sym}${PLANS.trial[cur]})`)} style={{ fontSize: 15, padding: "14px 30px" }}>
            {t.hero.cta1}
          </button>
          <a href="#demo" style={{ padding: "14px 30px", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 6, color: "#D4AF37", textDecoration: "none", fontWeight: 600, fontSize: 15, transition: "all 0.3s" }}>
            {t.hero.cta2}
          </a>
        </div>

        {/* STATS */}
        <div className="animate-fade-up delay-5" style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 64, flexWrap: "wrap" }}>
          {[
            { val: t.hero.stat1val, label: t.hero.stat1label },
            { val: t.hero.stat2val, label: t.hero.stat2label },
            { val: t.hero.stat3val, label: t.hero.stat3label },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="stat-number">{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="demo" style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="tag" style={{ marginBottom: 10 }}>{t.demo.badge}</div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800, marginBottom: 12 }}>{t.demo.title}</h2>
            <div className="divider" />
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 12 }}>
          {PORTFOLIO.map((v, i) => {
            const label = lang === "fr" ? v.fr : lang === "en" ? v.en : v.he;
            return (
              <Section key={v.id} delay={i * 0.08}>
                <div className="video-card"
                  onMouseEnter={() => videoRefs.current[v.id]?.play()}
                  onMouseLeave={() => { const el = videoRefs.current[v.id]; if (el) { el.pause(); el.currentTime = 0; } }}
                  onClick={() => wa()}
                >
                  <video ref={(el) => { videoRefs.current[v.id] = el; }} src={v.src} muted loop playsInline preload="metadata" />
                  <div style={{ position: "absolute", top: 7, left: 7, display: "flex", gap: 3 }}>
                    <span style={{ background: "rgba(0,0,0,0.8)", padding: "2px 6px", borderRadius: 4, fontSize: 9, color: "#D4AF37", fontWeight: 700, backdropFilter: "blur(4px)" }}>{v.platform}</span>
                    <span style={{ background: "rgba(0,0,0,0.8)", padding: "2px 6px", borderRadius: 4, fontSize: 9, color: "rgba(255,255,255,0.5)", fontWeight: 600, backdropFilter: "blur(4px)" }}>{v.tag}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 10px 10px", background: "linear-gradient(transparent, rgba(0,0,0,0.9))" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.3 }}>{label}</div>
                  </div>
                </div>
              </Section>
            );
          })}
        </div>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", marginTop: 20, fontSize: 11 }}>{t.demoDisclaimer}</p>
      </section>

      {/* WEBSITES SHOWCASE */}
      <section style={{ padding: "60px 20px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="tag" style={{ marginBottom: 10 }}>{t.websites.badge}</div>
              <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800, marginBottom: 10 }}>{t.websites.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>{t.websites.sub}</p>
            </div>
          </Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 16 }}>
            {WEBSITES.map((w, i) => {
              const wt = w[lang];
              return (
                <Section key={w.id} delay={i * 0.08}>
                  <a href={w.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div style={{
                      background: "var(--dark-3)", border: "1px solid #1E1E1E", borderRadius: 12,
                      overflow: "hidden", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)", cursor: "pointer",
                    }}
                      onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.borderColor = "rgba(212,175,55,0.3)"; el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.05)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = "none"; el.style.borderColor = "#1E1E1E"; el.style.boxShadow = "none"; }}
                    >
                      {/* URL preview bar */}
                      <div style={{ background: "#1A1A1A", padding: "8px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #222" }}>
                        <div style={{ display: "flex", gap: 4 }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                        </div>
                        <div style={{ flex: 1, background: "#111", borderRadius: 4, padding: "3px 10px", fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {w.url.replace("https://", "")}
                        </div>
                      </div>
                      {/* Content */}
                      <div style={{ padding: "18px 20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                          <div>
                            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{wt.name}</h3>
                            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.4 }}>{wt.desc}</p>
                          </div>
                          <span style={{ color: "#D4AF37", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 12, opacity: 0.7 }}>{t.websites.visit}</span>
                        </div>
                        <div style={{ display: "flex", gap: 5, marginTop: 10, flexWrap: "wrap" }}>
                          {w.tags.map((tag) => (
                            <span key={tag} style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)", color: "#D4AF37", padding: "2px 8px", borderRadius: 4, fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section style={{ padding: "60px 20px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="tag" style={{ marginBottom: 10 }}>{t.services.badge}</div>
              <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800 }}>{t.services.title}</h2>
            </div>
          </Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 16 }}>
            {(["video", "web", "voice"] as const).map((svc, i) => {
              const s = t.services[svc];
              const active = svcTab === svc;
              return (
                <Section key={svc} delay={i * 0.1}>
                  <div onClick={() => setSvcTab(svc)} style={{
                    background: active ? "linear-gradient(135deg, #1A1A0A, #1A150A)" : "var(--dark-3)",
                    border: active ? "1px solid rgba(212,175,55,0.4)" : "1px solid #1E1E1E",
                    borderRadius: 12, padding: 28, cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                    transform: active ? "translateY(-4px)" : "none",
                    boxShadow: active ? "0 12px 40px rgba(212,175,55,0.1)" : "none",
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: active ? "#D4AF37" : "#fff" }}>{s.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "60px 20px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="tag" style={{ marginBottom: 10 }}>{t.how.badge}</div>
              <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800 }}>{t.how.title}</h2>
            </div>
          </Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
            {t.how.steps.map((s, i) => (
              <Section key={s.num} delay={i * 0.12}>
                <div className="card-dark">
                  <div className="gradient-gold" style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 14 }}>{s.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontSize: 14 }}>{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "54px 20px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div className="tag" style={{ marginBottom: 10 }}>{t.results.badge}</div>
              <h2 style={{ fontSize: "clamp(20px, 3.5vw, 34px)", fontWeight: 800 }}>{t.results.title}</h2>
            </div>
          </Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {t.results.items.map((r, i) => (
              <Section key={r.metric} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: 22, background: "var(--dark-2)", borderRadius: 10, border: "1px solid #1A1A1A", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1A1A1A"; }}>
                  <div className="gradient-gold-animated" style={{ fontSize: 34, fontWeight: 900 }}>{r.metric}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 5 }}>{r.label}</div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "44px 20px", background: "var(--dark)" }}>
        <Section>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t.clients.label}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {t.clients.list.map((c) => (
                <span key={c} style={{ background: "var(--dark-3)", border: "1px solid #1E1E1E", padding: "6px 14px", borderRadius: 100, fontSize: 12, color: "rgba(255,255,255,0.55)", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* PRICING — TABBED */}
      <section id="pricing" style={{ padding: "60px 20px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div className="tag" style={{ marginBottom: 10 }}>{t.pricing.badge}</div>
              <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800, marginBottom: 8 }}>{t.pricing.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.35)", marginBottom: 16, fontSize: 14 }}>{t.pricing.sub}</p>
              {/* Service tabs */}
              <div style={{ display: "inline-flex", gap: 3, background: "#111", borderRadius: 8, padding: 3, marginBottom: 14 }}>
                {(["video", "web", "voice"] as const).map((tab) => (
                  <button key={tab} onClick={() => setSvcTab(tab)}
                    style={{ background: svcTab === tab ? "linear-gradient(135deg,#D4AF37,#F5D76E)" : "transparent", color: svcTab === tab ? "#0A0A0A" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700, transition: "all 0.25s" }}>
                    {t.services.tabs[tab]}
                  </button>
                ))}
              </div>
              <br />
              {/* Currency */}
              <div style={{ display: "inline-flex", gap: 2, background: "#111", borderRadius: 6, padding: 2 }}>
                {curs.map((c) => (
                  <button key={c.code} onClick={() => setCur(c.code)}
                    style={{ background: cur === c.code ? "rgba(212,175,55,0.15)" : "transparent", color: cur === c.code ? "#D4AF37" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", padding: "4px 12px", borderRadius: 4, fontSize: 11, fontWeight: 700, transition: "all 0.2s" }}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </Section>

          {/* VIDEO PRICING */}
          {svcTab === "video" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(195px, 1fr))", gap: 14, alignItems: "start" }}>
              {planKeys.map((key, i) => {
                const meta = planMeta[key];
                const price = PLANS[key][cur];
                const planText = t.pricing[key];
                return (
                  <Section key={key} delay={i * 0.06}>
                    <div className={`pricing-card ${meta.highlight ? "highlighted" : ""}`}>
                      {meta.badge && (
                        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D4AF37,#F5D76E)", color: "#0A0A0A", padding: "3px 12px", borderRadius: 100, fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", zIndex: 2 }}>
                          {meta.badge}
                        </div>
                      )}
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{planText.name}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>{planText.desc}</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                          <span className="gradient-gold" style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em" }}>{sym}{price.toLocaleString()}</span>
                          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>{meta.isTrial ? t.pricing.onetime : t.pricing.perMonth}</span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                        {planText.features.map((f) => (
                          <div key={f} style={{ color: f.startsWith("✗") ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)", fontSize: 12, display: "flex", gap: 5, alignItems: "center" }}>
                            {!f.startsWith("✓") && !f.startsWith("✗") && <span style={{ color: "#D4AF37", fontSize: 9 }}>✦</span>}
                            {f}
                          </div>
                        ))}
                      </div>
                      <button className="btn-gold" style={{ width: "100%", textAlign: "center", padding: "10px 0", fontSize: 12, opacity: meta.highlight ? 1 : 0.85 }}
                        onClick={() => wa(`Plan ${planText.name} Video (${sym}${price})`)}>{meta.isTrial ? t.pricing.ctaTrial : meta.isEnt ? t.pricing.ctaEnterprise : t.pricing.cta}</button>
                    </div>
                  </Section>
                );
              })}
            </div>
          )}

          {/* VOICE AI PRICING */}
          {svcTab === "voice" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, alignItems: "start" }}>
              {(["starter", "pro", "business", "enterprise"] as const).map((key, i) => {
                const price = VOICE_PLANS[key][cur];
                const planText = t.voicePricing[key];
                const isPop = key === "pro";
                return (
                  <Section key={key} delay={i * 0.06}>
                    <div className={`pricing-card ${isPop ? "highlighted" : ""}`}>
                      {isPop && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D4AF37,#F5D76E)", color: "#0A0A0A", padding: "3px 12px", borderRadius: 100, fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", zIndex: 2 }}>{t.pricing.popular}</div>}
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{planText.name}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>{planText.desc}</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                          <span className="gradient-gold" style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em" }}>{sym}{price.toLocaleString()}</span>
                          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>{t.pricing.perMonth}</span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                        {planText.features.map((f) => (
                          <div key={f} style={{ color: f.startsWith("✗") ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)", fontSize: 12, display: "flex", gap: 5, alignItems: "center" }}>
                            {!f.startsWith("✓") && !f.startsWith("✗") && <span style={{ color: "#D4AF37", fontSize: 9 }}>✦</span>}
                            {f}
                          </div>
                        ))}
                      </div>
                      <button className="btn-gold" style={{ width: "100%", textAlign: "center", padding: "10px 0", fontSize: 12 }}
                        onClick={() => wa(`Plan ${planText.name} Voice AI (${sym}${price}/mo)`)}>{key === "enterprise" ? t.pricing.ctaEnterprise : t.pricing.cta}</button>
                    </div>
                  </Section>
                );
              })}
            </div>
          )}

          {/* WEB DEV PRICING */}
          {svcTab === "web" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, alignItems: "start" }}>
              {(["landing", "vitrine", "ecommerce", "saas"] as const).map((key, i) => {
                const price = WEB_PLANS[key][cur];
                const planText = t.webPricing[key];
                const isPop = key === "ecommerce";
                return (
                  <Section key={key} delay={i * 0.06}>
                    <div className={`pricing-card ${isPop ? "highlighted" : ""}`}>
                      {isPop && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D4AF37,#F5D76E)", color: "#0A0A0A", padding: "3px 12px", borderRadius: 100, fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", zIndex: 2 }}>{t.pricing.popular}</div>}
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{planText.name}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>{planText.desc}</div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                          <span className="gradient-gold" style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em" }}>{sym}{price.toLocaleString()}</span>
                          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>{t.pricing.onetime}</span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                        {planText.features.map((f) => (
                          <div key={f} style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, display: "flex", gap: 5, alignItems: "center" }}>
                            <span style={{ color: "#D4AF37", fontSize: 9 }}>✦</span>{f}
                          </div>
                        ))}
                      </div>
                      <button className="btn-gold" style={{ width: "100%", textAlign: "center", padding: "10px 0", fontSize: 12 }}
                        onClick={() => wa(`${planText.name} (${sym}${price})`)}>{key === "saas" ? t.pricing.ctaEnterprise : t.pricing.cta}</button>
                    </div>
                  </Section>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "60px 20px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <Section>
            <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>{t.testimonials.title}</h2>
          </Section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {t.testimonials.list.map((te, i) => (
              <Section key={te.name} delay={i * 0.1}>
                <div className="card-dark">
                  <div style={{ color: "#D4AF37", fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>★★★★★</div>
                  <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>
                    &ldquo;{te.text}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{te.name}</div>
                    <div style={{ color: "#D4AF37", fontSize: 11, marginTop: 2 }}>{te.role}</div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 20px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Section>
            <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>{t.faq.title}</h2>
          </Section>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.faq.items.map((faq, i) => (
              <Section key={faq.q} delay={i * 0.06}>
                <details style={{ background: "var(--dark-3)", border: "1px solid #1E1E1E", borderRadius: 10, padding: "16px 20px", cursor: "pointer", transition: "all 0.3s" }}>
                  <summary style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.85)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <span className="faq-icon" style={{ color: "#D4AF37", fontSize: 20, flexShrink: 0, marginLeft: 10 }}>+</span>
                  </summary>
                  <p className="faq-answer" style={{ marginTop: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, fontSize: 13 }}>{faq.a}</p>
                </details>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contact" style={{ position: "relative", padding: "80px 20px", textAlign: "center", background: "linear-gradient(180deg,#111 0%,#0A0A0A 100%)", borderTop: "1px solid rgba(212,175,55,0.06)", overflow: "hidden" }}>
        <div className="hero-glow" style={{ opacity: 0.3 }} />
        <Section>
          <div style={{ maxWidth: 580, margin: "0 auto", position: "relative" }}>
            <div className="tag" style={{ marginBottom: 18 }}>{t.cta.badge}</div>
            <h2 style={{ fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.1 }}>
              {t.cta.title1} <span className="gradient-gold-animated">{t.cta.title2}</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, marginBottom: 32 }}>{t.cta.sub}</p>
            <button className="btn-gold pulse-ring" style={{ fontSize: 16, padding: "16px 40px" }}
              onClick={() => wa(`Bonjour, je veux commander ma première vidéo NovaMedia (${sym}${PLANS.trial[cur]})`)}>
              {t.cta.btn}
            </button>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 12 }}>{t.cta.note}</p>
          </div>
        </Section>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 28px", borderTop: "1px solid #131313", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 16 }}>
          <span className="gradient-gold-animated">Nova</span><span>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 8, marginLeft: 5, opacity: 0.35, fontWeight: 500 }}>STUDIO</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>{t.footer}</div>
        <div style={{ display: "flex", gap: 4 }}>
          {langs.map((l) => (
            <button key={l.code} onClick={() => switchLang(l.code)} style={{ background: lang === l.code ? "rgba(212,175,55,0.12)" : "transparent", color: lang === l.code ? "#D4AF37" : "rgba(255,255,255,0.25)", border: "1px solid", borderColor: lang === l.code ? "rgba(212,175,55,0.15)" : "transparent", padding: "3px 8px", borderRadius: 3, cursor: "pointer", fontSize: 10, fontWeight: 700, transition: "all 0.2s" }}>
              {l.label}
            </button>
          ))}
        </div>
      </footer>
    </main>
  );
}
