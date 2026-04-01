"use client";

import { useEffect, useRef } from "react";
import { spokenLanguages, volunteering, education } from "@/data/resume";

const levelColor: Record<string, string> = {
  Native: "#ec4899",
  Fluent: "#60d394",
  Proficient: "#ffd166",
  Conversational: "#ef8c4b",
};

const levelWidth: Record<string, string> = {
  Native: "100%",
  Fluent: "85%",
  Proficient: "65%",
  Conversational: "45%",
};

export default function Languages() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="languages"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
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
          Languages
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            color: "#fff",
          }}
        >
          Fluent in 8 Languages
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 56, maxWidth: 600 }}>
          A rare combination of technical and linguistic skill — I bridge communication gaps
          across international teams and diverse communities.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="lang-grid">
          {/* Spoken languages */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 28 }}>
              Spoken Languages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {spokenLanguages.map((lang) => (
                <div key={lang.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>{lang.name}</span>
                    <span
                      style={{
                        fontSize: 12,
                        color: levelColor[lang.level],
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "var(--surface-2)",
                      borderRadius: 100,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: levelWidth[lang.level],
                        background: levelColor[lang.level],
                        borderRadius: 100,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer & Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>
                Volunteer Work
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {volunteering.map((v) => (
                  <div
                    key={v.org}
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      padding: "20px 24px",
                    }}
                  >
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                      {v.org}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--accent-light)", marginBottom: 8 }}>
                      {v.role} · {v.period}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                      {v.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>
                Education
              </h3>
              {education.map((e) => (
                <div
                  key={e.school}
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                    {e.school}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--accent-light)", marginBottom: 4 }}>
                    {e.period}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--muted)" }}>{e.degree}</div>
                </div>
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
        @media (max-width: 768px) {
          .lang-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
