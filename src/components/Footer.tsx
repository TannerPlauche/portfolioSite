import { personal } from "@/data/resume";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "var(--muted)" }}>
        © {new Date().getFullYear()} {personal.name} · Built with Next.js
      </p>
    </footer>
  );
}
