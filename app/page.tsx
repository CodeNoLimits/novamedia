"use client";

import { useState } from "react";
import { translations, type Lang } from "./i18n";

const VIDEOS = [
  { id: "v1", labelFr: "E-commerce mode", labelEn: "Fashion e-commerce", labelHe: "אופנה אונליין", platform: "TikTok · 1.2M", color: "#1A1A2E" },
  { id: "v2", labelFr: "Restaurant gastronomique", labelEn: "Gourmet restaurant", labelHe: "מסעדת גורמה", platform: "Instagram · 890K", color: "#1A2E1A" },
  { id: "v3", labelFr: "Agence immobilière", labelEn: "Real estate agency", labelHe: "סוכנות נדל\"ן", platform: "LinkedIn · 340K", color: "#2E1A1A" },
  { id: "v4", labelFr: "Coach business", labelEn: "Business coach", labelHe: "מאמן עסקי", platform: "TikTok · 2.1M", color: "#1A1A2E" },
  { id: "v5", labelFr: "Produit beauté", labelEn: "Beauty product", labelHe: "מוצר יופי", platform: "Instagram · 1.5M", color: "#2E2E1A" },
  { id: "v6", labelFr: "Application mobile", labelEn: "Mobile app", labelHe: "אפליקציה", platform: "LinkedIn · 720K", color: "#1A2E2E" },
];

const PLANS = [
  { name: "Starter", price: "490", videos: "3", formats_fr: "TikTok ou Reels", formats_en: "TikTok or Reels", formats_he: "טיקטוק או ריילס", revisions: "1", voice: false, subs: true, pub: false, highlight: false },
  { name: "Growth", price: "990", videos: "8", formats_fr: "TikTok + Reels + LinkedIn", formats_en: "TikTok + Reels + LinkedIn", formats_he: "טיקטוק + ריילס + לינקדאין", revisions: "2", voice: true, subs: true, pub: false, highlight: true },
  { name: "Scale", price: "1990", videos: "20", formats_fr: "Multi-formats illimités", formats_en: "Unlimited multi-formats", formats_he: "פורמטים מרובים ללא הגבלה", revisions: "∞", voice: true, subs: true, pub: true, highlight: false },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];
  const isRTL = lang === "he";
  const dir = isRTL ? "rtl" : "ltr";

  const whatsapp = () => {
    window.open("https://wa.me/972585148500?text=Bonjour%2C%20je%20souhaite%20d%C3%A9couvrir%20NovaMedia%20Studio", "_blank");
  };

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "he", label: "עב" },
  ];

  return (
    <main dir={dir} style={{ background: "#0A0A0A", minHeight: "100vh", color: "#fff", fontFamily: isRTL ? "'Segoe UI', Arial, sans-serif" : "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 40px",
        background: "rgba(10,10,10,0.96)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
      }}>
        <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em" }}>
          <span className="gradient-gold">Nova</span>
          <span style={{ color: "#fff" }}>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 10, marginLeft: 6, opacity: 0.6, fontWeight: 500 }}>STUDIO</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Lang switcher */}
          <div style={{ display: "flex", gap: 4, background: "#1A1A1A", borderRadius: 6, padding: 3 }}>
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  background: lang === l.code ? "linear-gradient(135deg,#D4AF37,#F5D76E)" : "transparent",
                  color: lang === l.code ? "#0A0A0A" : "rgba(255,255,255,0.5)",
                  border: "none", cursor: "pointer",
                  padding: "5px 12px", borderRadius: 4, fontSize: 12, fontWeight: 700,
                  transition: "all 0.15s",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button className="btn-gold" style={{ padding: "10px 22px", fontSize: 13 }} onClick={whatsapp}>
            {t.nav.cta}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 150, paddingBottom: 100, textAlign: "center", padding: "150px 20px 100px", maxWidth: 820, margin: "0 auto" }}>
        <div className="tag" style={{ marginBottom: 24 }}>{t.hero.badge}</div>
        <h1 style={{ fontSize: "clamp(38px, 6.5vw, 70px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
          {t.hero.title1}{" "}
          <span className="gradient-gold">{t.hero.title2}</span>
        </h1>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
          {t.hero.sub}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold pulse-ring" onClick={whatsapp} style={{ fontSize: 16, padding: "16px 36px" }}>
            {t.hero.cta1}
          </button>
          <a href="#demo" style={{ padding: "16px 36px", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 4, color: "#D4AF37", textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
            {t.hero.cta2}
          </a>
        </div>

        {/* STATS */}
        <div style={{ display: "flex", gap: 56, justifyContent: "center", marginTop: 80, flexWrap: "wrap" }}>
          {[
            { val: t.hero.stat1val, label: t.hero.stat1label },
            { val: t.hero.stat2val, label: t.hero.stat2label },
            { val: t.hero.stat3val, label: t.hero.stat3label },
          ].map((s) => (
            <div key={s.val} style={{ textAlign: "center" }}>
              <div className="gradient-gold" style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.03em" }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO REEL */}
      <section id="demo" style={{ padding: "80px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 14 }}>{t.demo.badge}</div>
          <h2 style={{ fontSize: "clamp(26px, 4.5vw, 46px)", fontWeight: 800, marginBottom: 16 }}>{t.demo.title}</h2>
          <div className="divider"></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 14 }}>
          {VIDEOS.map((v) => (
            <div key={v.id} onClick={whatsapp} style={{ cursor: "pointer" }}>
              <div className="video-thumb" style={{ background: `linear-gradient(135deg, ${v.color}, #0A0A0A)` }}>
                <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.7)", padding: "3px 8px", borderRadius: 4, fontSize: 10, color: "#D4AF37", fontWeight: 700 }}>
                  {v.platform}
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 12px 14px", background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {lang === "fr" ? v.labelFr : lang === "en" ? v.labelEn : v.labelHe}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", marginTop: 28, fontSize: 13 }}>{t.demoDisclaimer}</p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 20px", background: "#111" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 14 }}>{t.how.badge}</div>
            <h2 style={{ fontSize: "clamp(26px, 4.5vw, 46px)", fontWeight: 800 }}>{t.how.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
            {t.how.steps.map((step) => (
              <div key={step.num} className="card-dark">
                <div className="gradient-gold" style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 18 }}>{step.num}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "60px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13, marginBottom: 22, textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.clients.label}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {t.clients.list.map((c) => (
              <span key={c} style={{ background: "#1A1A1A", border: "1px solid #272727", padding: "8px 18px", borderRadius: 100, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "80px 20px", background: "#111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 14 }}>{t.pricing.badge}</div>
            <h2 style={{ fontSize: "clamp(26px, 4.5vw, 46px)", fontWeight: 800, marginBottom: 12 }}>{t.pricing.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.45)" }}>{t.pricing.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
            {PLANS.map((plan) => {
              const formats = lang === "fr" ? plan.formats_fr : lang === "en" ? plan.formats_en : plan.formats_he;
              const revLabel = plan.revisions === "∞" ? t.pricing.features.revisionsUnlim : plan.revisions === "2" ? t.pricing.features.revisions2 : t.pricing.features.revisions1;
              return (
                <div key={plan.name} style={{
                  background: plan.highlight ? "linear-gradient(135deg,#1A1A0A,#1A150A)" : "#1A1A1A",
                  border: plan.highlight ? "1px solid rgba(212,175,55,0.5)" : "1px solid #272727",
                  borderRadius: 12, padding: 34, position: "relative",
                }}>
                  {plan.highlight && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D4AF37,#F5D76E)", color: "#0A0A0A", padding: "4px 14px", borderRadius: 100, fontSize: 11, fontWeight: 800, whiteSpace: "nowrap" }}>
                      {t.pricing.popular}
                    </div>
                  )}
                  <div style={{ marginBottom: 22 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{plan.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span className="gradient-gold" style={{ fontSize: 46, fontWeight: 900, letterSpacing: "-0.03em" }}>€{plan.price}</span>
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/mois</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
                    {[
                      { text: t.pricing.features.videos(plan.videos), active: true },
                      { text: formats, active: true },
                      { text: revLabel, active: true },
                      { text: plan.voice ? t.pricing.features.voiceYes : t.pricing.features.voiceNo, active: plan.voice },
                      { text: plan.subs ? t.pricing.features.subYes : t.pricing.features.subNo, active: plan.subs },
                      { text: plan.pub ? t.pricing.features.pubYes : t.pricing.features.pubNo, active: plan.pub },
                    ].map((item) => (
                      <div key={item.text} style={{ color: item.active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)", fontSize: 14, display: "flex", gap: 8, alignItems: "center" }}>
                        {!item.text.startsWith("✓") && !item.text.startsWith("✗") && <span style={{ color: "#D4AF37", fontSize: 11 }}>✦</span>}
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold" style={{ width: "100%", textAlign: "center", opacity: plan.highlight ? 1 : 0.85 }} onClick={whatsapp}>
                    {t.pricing.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800 }}>{t.testimonials.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {t.testimonials.list.map((tes) => (
              <div key={tes.name} className="card-dark">
                <div style={{ color: "#D4AF37", fontSize: 22, marginBottom: 14 }}>★★★★★</div>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 20, fontSize: 15 }}>
                  &ldquo;{tes.text}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{tes.name}</div>
                  <div style={{ color: "#D4AF37", fontSize: 12, marginTop: 2 }}>{tes.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contact" style={{ padding: "100px 20px", textAlign: "center", background: "linear-gradient(180deg,#111 0%,#0A0A0A 100%)", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div className="tag" style={{ marginBottom: 22 }}>{t.cta.badge}</div>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.1 }}>
            {t.cta.title1}{" "}
            <span className="gradient-gold">{t.cta.title2}</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, marginBottom: 40 }}>{t.cta.sub}</p>
          <button className="btn-gold pulse-ring" style={{ fontSize: 18, padding: "20px 48px" }} onClick={whatsapp}>
            {t.cta.btn}
          </button>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, marginTop: 14 }}>{t.cta.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "30px 40px", borderTop: "1px solid #181818", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div style={{ fontWeight: 900, fontSize: 18 }}>
          <span className="gradient-gold">Nova</span><span>Media</span>
          <span style={{ color: "#D4AF37", fontSize: 10, marginLeft: 6, opacity: 0.45, fontWeight: 500 }}>STUDIO</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.28)", fontSize: 13 }}>{t.footer}</div>
        <div style={{ display: "flex", gap: 8 }}>
          {langs.map((l) => (
            <button key={l.code} onClick={() => setLang(l.code)} style={{ background: lang === l.code ? "rgba(212,175,55,0.2)" : "transparent", color: lang === l.code ? "#D4AF37" : "rgba(255,255,255,0.35)", border: "1px solid", borderColor: lang === l.code ? "rgba(212,175,55,0.3)" : "transparent", padding: "4px 10px", borderRadius: 4, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
              {l.label}
            </button>
          ))}
        </div>
      </footer>
    </main>
  );
}
