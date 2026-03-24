"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/resume";

const categories = [
  { label: "Languages", items: skills.languages, icon: "⌨️" },
  { label: "Frameworks & Libraries", items: skills.frameworks, icon: "🧩" },
  { label: "Databases", items: skills.databases, icon: "🗄️" },
  { label: "Tools & Platforms", items: skills.tools, icon: "🔧" },
];

export default function Skills() {
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
      id="skills"
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
          Skills
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
          Technical Expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "28px 24px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 12 }}>{cat.icon}</div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent-light)",
                  marginBottom: 20,
                }}
              >
                {cat.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "4px 12px",
                      fontSize: 13,
                      color: "var(--foreground)",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: 100,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-in-section.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
