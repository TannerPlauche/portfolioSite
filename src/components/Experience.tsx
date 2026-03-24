"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/resume";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const job = experience[active];

  return (
    <section id="experience" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref} className="fade-in-section">
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          Experience
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 56,
            color: "#fff",
          }}
        >
          Professional Journey
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32 }} className="exp-grid">
          {/* Company list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {experience.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? "var(--accent-glow)" : "transparent",
                  border: "none",
                  borderLeft: `2px solid ${active === i ? "var(--accent)" : "var(--border)"}`,
                  padding: "12px 20px",
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: "0 8px 8px 0",
                  transition: "all 0.2s",
                  color: active === i ? "#fff" : "var(--muted)",
                  fontWeight: active === i ? 600 : 400,
                  fontSize: 14,
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  if (active !== i) (e.currentTarget.style.color = "var(--foreground)");
                }}
                onMouseLeave={(e) => {
                  if (active !== i) (e.currentTarget.style.color = "var(--muted)");
                }}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "36px 40px",
            }}
            key={active}
            className="exp-panel"
          >
            <div style={{ marginBottom: 24 }}>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                {job.role}
              </h3>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ color: "var(--accent-light)", fontWeight: 600, fontSize: 15 }}>
                  {job.company}
                </span>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>{job.location}</span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    background: "var(--surface-2)",
                    padding: "2px 10px",
                    borderRadius: 100,
                    border: "1px solid var(--border)",
                  }}
                >
                  {job.start} – {job.end}
                </span>
              </div>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {job.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "4px 12px",
                    fontSize: 12,
                    color: "var(--accent-light)",
                    background: "var(--accent-glow)",
                    border: "1px solid rgba(124,106,247,0.25)",
                    borderRadius: 100,
                    letterSpacing: "0.03em",
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-section.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .exp-panel {
          animation: fadeSlide 0.25s ease;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
