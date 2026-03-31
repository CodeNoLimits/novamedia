"use client";

import { useState, useRef } from "react";
import { translations, PLANS, PORTFOLIO, currencySymbol, type Lang, type Currency } from "./i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [cur, setCur] = useState<Currency>("eur");
  const t = translations[lang];
  const isRTL = lang === "he";
  const dir = isRTL ? "rtl" : "ltr";
  const sym = currencySymbol[cur];

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

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
    { code: "eur", label: "€ EUR" },
    { code: "usd", label: "$ USD" },
  ];

  const plans = [
    { key: "trial" as const, badge: null, highlight: false, isTrial: true },
    { key: "smallbiz" as const, badge: null, highlight: false, isTrial: false },
    { key: "growth" as const, badge: t.pricing.popular, highlight: true, isTrial: false },
    { key: "scale" as const, badge: t.pricing.bestValue, highlight: false, isTrial: false },
    { key: "enterprise" as const, badge: null, highlight: false, isTrial: false },
  ];

  return (
    <main dir={dir} style={{ background: "#0A0A0A", minHeight: "100vh", color: "#fff", fontFamily: isRTL ? "'Segoe UI', Arial, sans-serif" : "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "rgba(10,10,10,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
        <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="gradient-gold">Nova</span><span>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 9, marginLeft: 6, opacity: 0.5, fontWeight: 500 }}>STUDIO</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Lang */}
          <div style={{ display: "flex", gap: 2, background: "#151515", borderRadius: 5, padding: 2 }}>
            {langs.map((l) => (
              <button key={l.code} onClick={() => { setLang(l.code); if (l.code === "he") setCur("usd"); }}
                style={{ background: lang === l.code ? "linear-gradient(135deg,#D4AF37,#F5D76E)" : "transparent", color: lang === l.code ? "#0A0A0A" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: "4px 10px", borderRadius: 3, fontSize: 11, fontWeight: 700 }}>
                {l.label}
              </button>
            ))}
          </div>
          {/* Currency */}
          <div style={{ display: "flex", gap: 2, background: "#151515", borderRadius: 5, padding: 2 }}>
            {curs.map((c) => (
              <button key={c.code} onClick={() => setCur(c.code)}
                style={{ background: cur === c.code ? "rgba(212,175,55,0.2)" : "transparent", color: cur === c.code ? "#D4AF37" : "rgba(255,255,255,0.35)", border: cur === c.code ? "1px solid rgba(212,175,55,0.3)" : "1px solid transparent", cursor: "pointer", padding: "3px 8px", borderRadius: 3, fontSize: 10, fontWeight: 700 }}>
                {c.label}
              </button>
            ))}
          </div>
          <button className="btn-gold" style={{ padding: "9px 20px", fontSize: 12 }} onClick={() => wa()}>
            {t.nav.cta}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: "center", padding: "140px 20px 80px", maxWidth: 820, margin: "0 auto" }}>
        <div className="tag" style={{ marginBottom: 22 }}>{t.hero.badge}</div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 22 }}>
          {t.hero.title1} <span className="gradient-gold">{t.hero.title2}</span>
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 44, maxWidth: 580, margin: "0 auto 44px" }}>
          {t.hero.sub}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold pulse-ring" onClick={() => wa(`Bonjour, je veux tester 1 vidéo (${sym}${PLANS.trial[cur]})`)} style={{ fontSize: 15, padding: "15px 32px" }}>
            {t.hero.cta1}
          </button>
          <a href="#demo" style={{ padding: "15px 32px", border: "1px solid rgba(212,175,55,0.25)", borderRadius: 4, color: "#D4AF37", textDecoration: "none", fontWeight: 600, fontSize: 15 }}>
            {t.hero.cta2}
          </a>
        </div>
        <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 70, flexWrap: "wrap" }}>
          {[
            { val: t.hero.stat1val, label: t.hero.stat1label },
            { val: t.hero.stat2val, label: t.hero.stat2label },
            { val: t.hero.stat3val, label: t.hero.stat3label },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="gradient-gold" style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.03em" }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO — REAL VIDEOS */}
      <section id="demo" style={{ padding: "70px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="tag" style={{ marginBottom: 12 }}>{t.demo.badge}</div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, marginBottom: 14 }}>{t.demo.title}</h2>
          <div className="divider"></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
          {PORTFOLIO.map((v) => {
            const label = lang === "fr" ? v.fr : lang === "en" ? v.en : v.he;
            return (
              <div key={v.id} style={{ cursor: "pointer" }}
                onMouseEnter={() => videoRefs.current[v.id]?.play()}
                onMouseLeave={() => { const el = videoRefs.current[v.id]; if (el) { el.pause(); el.currentTime = 0; } }}
              >
                <div style={{ aspectRatio: "9/16", borderRadius: 8, overflow: "hidden", position: "relative", border: "1px solid rgba(212,175,55,0.1)", background: "#111" }}>
                  <video
                    ref={(el) => { videoRefs.current[v.id] = el; }}
                    src={v.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 4 }}>
                    <span style={{ background: "rgba(0,0,0,0.75)", padding: "2px 7px", borderRadius: 3, fontSize: 9, color: "#D4AF37", fontWeight: 700 }}>{v.platform}</span>
                    <span style={{ background: "rgba(0,0,0,0.75)", padding: "2px 7px", borderRadius: 3, fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{v.tag}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 10px 10px", background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.3 }}>{label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", marginTop: 24, fontSize: 12 }}>{t.demoDisclaimer}</p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "70px 20px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>{t.how.badge}</div>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800 }}>{t.how.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            {t.how.steps.map((s) => (
              <div key={s.num} className="card-dark">
                <div className="gradient-gold" style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "60px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="tag" style={{ marginBottom: 12 }}>{t.results.badge}</div>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800 }}>{t.results.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {t.results.items.map((r) => (
              <div key={r.metric} style={{ textAlign: "center", padding: 24, background: "#111", borderRadius: 8, border: "1px solid #1A1A1A" }}>
                <div className="gradient-gold" style={{ fontSize: 36, fontWeight: 900 }}>{r.metric}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 6 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "50px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.clients.label}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {t.clients.list.map((c) => (
              <span key={c} style={{ background: "#141414", border: "1px solid #222", padding: "6px 14px", borderRadius: 100, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "70px 20px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>{t.pricing.badge}</div>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, marginBottom: 10 }}>{t.pricing.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>{t.pricing.sub}</p>
            {/* Currency toggle */}
            <div style={{ display: "inline-flex", gap: 4, background: "#151515", borderRadius: 6, padding: 3 }}>
              {curs.map((c) => (
                <button key={c.code} onClick={() => setCur(c.code)}
                  style={{ background: cur === c.code ? "linear-gradient(135deg,#D4AF37,#F5D76E)" : "transparent", color: cur === c.code ? "#0A0A0A" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: "5px 14px", borderRadius: 4, fontSize: 12, fontWeight: 700 }}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, alignItems: "start" }}>
            {plans.map((p) => {
              const planData = PLANS[p.key];
              const planText = t.pricing[p.key];
              const price = planData[cur];
              const isEnt = p.key === "enterprise";
              return (
                <div key={p.key} style={{
                  background: p.highlight ? "linear-gradient(135deg,#1A1A0A,#1A150A)" : "#141414",
                  border: p.highlight ? "1px solid rgba(212,175,55,0.5)" : "1px solid #222",
                  borderRadius: 10, padding: "28px 22px", position: "relative",
                  transform: p.highlight ? "scale(1.02)" : "none",
                }}>
                  {p.badge && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D4AF37,#F5D76E)", color: "#0A0A0A", padding: "3px 12px", borderRadius: 100, fontSize: 10, fontWeight: 800, whiteSpace: "nowrap" }}>
                      {p.badge}
                    </div>
                  )}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{planText.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>{planText.desc}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                      <span className="gradient-gold" style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.03em" }}>
                        {sym}{price.toLocaleString()}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
                        {p.isTrial ? t.pricing.onetime : t.pricing.perMonth}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                    {planText.features.map((f) => (
                      <div key={f} style={{
                        color: f.startsWith("✗") ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.75)",
                        fontSize: 12.5, display: "flex", gap: 6, alignItems: "center",
                      }}>
                        {!f.startsWith("✓") && !f.startsWith("✗") && <span style={{ color: "#D4AF37", fontSize: 10 }}>✦</span>}
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold" style={{ width: "100%", textAlign: "center", padding: "11px 0", fontSize: 13, opacity: p.highlight ? 1 : 0.85 }}
                    onClick={() => wa(isEnt ? `Bonjour, je suis intéressé par le plan Enterprise NovaMedia` : `Bonjour, je veux le plan ${planText.name} (${sym}${price})`)}>
                    {p.isTrial ? t.pricing.ctaTrial : isEnt ? t.pricing.ctaEnterprise : t.pricing.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "70px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800 }}>{t.testimonials.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {t.testimonials.list.map((te) => (
              <div key={te.name} className="card-dark">
                <div style={{ color: "#D4AF37", fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 18, fontSize: 14 }}>
                  &ldquo;{te.text}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{te.name}</div>
                  <div style={{ color: "#D4AF37", fontSize: 11, marginTop: 2 }}>{te.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "70px 20px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 40 }}>{t.faq.title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {t.faq.items.map((faq) => (
              <details key={faq.q} style={{ background: "#141414", border: "1px solid #222", borderRadius: 8, padding: "18px 22px", cursor: "pointer" }}>
                <summary style={{ fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,0.9)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ color: "#D4AF37", fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ marginTop: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, fontSize: 14 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contact" style={{ padding: "90px 20px", textAlign: "center", background: "linear-gradient(180deg,#111 0%,#0A0A0A 100%)", borderTop: "1px solid rgba(212,175,55,0.08)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div className="tag" style={{ marginBottom: 20 }}>{t.cta.badge}</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.1 }}>
            {t.cta.title1} <span className="gradient-gold">{t.cta.title2}</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17, marginBottom: 36 }}>{t.cta.sub}</p>
          <button className="btn-gold pulse-ring" style={{ fontSize: 17, padding: "18px 44px" }}
            onClick={() => wa(`Bonjour, je veux commander ma première vidéo NovaMedia (${sym}${PLANS.trial[cur]})`)}>
            {t.cta.btn}
          </button>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 12 }}>{t.cta.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "26px 32px", borderTop: "1px solid #151515", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontWeight: 900, fontSize: 17 }}>
          <span className="gradient-gold">Nova</span><span>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 9, marginLeft: 5, opacity: 0.4, fontWeight: 500 }}>STUDIO</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{t.footer}</div>
        <div style={{ display: "flex", gap: 6 }}>
          {langs.map((l) => (
            <button key={l.code} onClick={() => setLang(l.code)} style={{ background: lang === l.code ? "rgba(212,175,55,0.15)" : "transparent", color: lang === l.code ? "#D4AF37" : "rgba(255,255,255,0.3)", border: "1px solid", borderColor: lang === l.code ? "rgba(212,175,55,0.2)" : "transparent", padding: "3px 8px", borderRadius: 3, cursor: "pointer", fontSize: 11, fontWeight: 700 }}>
              {l.label}
            </button>
          ))}
        </div>
      </footer>
    </main>
  );
}
