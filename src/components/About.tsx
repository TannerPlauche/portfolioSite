"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "8", label: "Spoken Languages" },
  { value: "15+", label: "Tech Stacks" },
  { value: "5+", label: "Industries" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}
    >
      <div
        ref={ref}
        style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        className="fade-in-section"
      >
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
          About
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 48,
            color: "#fff",
          }}
        >
          Developer. Linguist. Builder.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 17, color: "var(--foreground)", lineHeight: 1.8 }}>
              I&apos;m a Senior Software Developer with over a decade of experience building
              full-stack applications across healthcare, fintech, and enterprise software.
              I thrive at the intersection of clean architecture and intuitive user experience.
            </p>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8 }}>
              What sets me apart is a rare combination: deep technical expertise paired with
              fluency in 8 spoken languages — Czech, Russian, Slovak, French, Spanish, Polish,
              Sango, and English. This gives me a unique ability to bridge communication gaps
              across international teams and diverse stakeholders.
            </p>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8 }}>
              Beyond code, I volunteer as an interpreter for refugees arriving in Nashville,
              and I&apos;ve taught English and web development across four countries.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "28px 24px",
                  textAlign: "center",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget.style.borderColor = "var(--accent)")
                  )
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget.style.borderColor = "var(--border)")
                  )
                }
              >
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--accent-light)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", letterSpacing: "0.02em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-section.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
